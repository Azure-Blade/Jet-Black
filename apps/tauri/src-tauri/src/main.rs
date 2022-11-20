#![allow(unused)] //Remove later
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod commands;
mod error;
mod prelude;

use crate::{
    commands::{called_from_js, hash256sum},
    prelude::*,
};

use tauri::{generate_context, generate_handler, Builder, Manager, RunEvent};

fn main() -> Result<()> {
    let app = Builder::default()
        .plugin(tauri_plugin_store::PluginBuilder::default().build())
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(generate_handler![called_from_js, hash256sum])
        .build(generate_context!())
        .expect("error while running tauri application");

    app.run(|app_handle, e| match e {
        RunEvent::Ready => {
            let window = app_handle
                .get_window("main")
                .expect("Cannot get main window");
            window.show();

            pl!("Window is ready");
        }
        _ => {}
    });

    Ok(())
}
