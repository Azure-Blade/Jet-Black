use sha2::{Digest, Sha256};

#[tauri::command]
pub fn called_from_js() -> String {
    // The print macro is problematic in release environment (crashes the application if not ran from a terminal)
    // println!("Returning from tauri");
    "Hi from Tauri".to_owned()
}

#[tauri::command]
pub fn hash256sum(hash_input: String) -> String {
    let mut hasher = Sha256::new();
    hasher.update(hash_input.as_bytes());
    let result = hasher.finalize();
    format!("{:X}", result)
}
