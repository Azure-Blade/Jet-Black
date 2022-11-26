#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod commands;
mod error;
mod prelude;

use tauri::{generate_context, Builder};

fn main() {
    Builder::default()
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .run(generate_context!())
        .expect("error while running tauri application");
}
