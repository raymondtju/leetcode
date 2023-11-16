struct Solution;
impl Solution {
  pub fn is_palindrome(x: i32) -> bool {
    let s = x.to_string();
    let reverse: String = s.chars().rev().collect();
    s == reverse
  }
}

fn main() {
  println!("{}", Solution::is_palindrome(121));
}
