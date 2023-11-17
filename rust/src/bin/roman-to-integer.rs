use std::collections::HashMap;

struct Solution;
impl Solution {
  pub fn roman_to_int(s: String) -> i32 {
    let mut symbols = HashMap::new();
    symbols.insert("I", 1);
    symbols.insert("V", 5);
    symbols.insert("X", 10);
    symbols.insert("L", 50);
    symbols.insert("C", 100);
    symbols.insert("D", 500);
    symbols.insert("M", 1000);

    // println!("{:?}", symbols);
    let mut result = 0;
    let chars: Vec<char> = s.chars().collect();
    // println!("{:?}", chars);

    for x in 0..s.len() {
      if x < &s.len() - 1
        && symbols[(&chars[x].to_string()).as_str()] < symbols[(&chars[x + 1].to_string()).as_str()]
      {
        result -= symbols[(&chars[x].to_string()).as_str()];
      } else {
        result = result + symbols[(&chars[x].to_string()).as_str()];
      }
    }

    return result;
  }
}

fn main() {
  println!("{}", Solution::roman_to_int("MCMXCIV".to_string()))
}
