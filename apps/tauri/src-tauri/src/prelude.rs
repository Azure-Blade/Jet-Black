pub use crate::error::Error;

pub type Result<T> = core::result::Result<T, Error>;

pub struct W<T>(pub T);

pub use std::format as f;
pub use std::print as p;
pub use std::println as pl;
