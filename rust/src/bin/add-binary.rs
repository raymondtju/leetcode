struct Solution;
impl Solution {
  pub fn add_binary(a: String, b: String) -> String {
    let a = i64::from_str_radix(&a, 2).unwrap();
    let b = i64::from_str_radix(&b, 2).unwrap();
    println!("{:#?}", i64::from_str_radix(&a, 2));
    println!("{}", b);
    let sum = a + b;
    format!("{:b}", sum)
  }
}

fn main() {
  println!(
    "{}",
    Solution::add_binary("1010".to_string(), "1011".to_string())
  );
}
