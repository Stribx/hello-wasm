use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn increment(a: i32) -> i32 {
    a + 1
}

#[wasm_bindgen]
pub fn decrement(a:  i32) -> i32 {
    a - 1
}
