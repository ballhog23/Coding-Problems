function checkPassword(password, password_repeat) {
  if (password.length < 20 || password !== password_repeat) return false;
  return true;
}

checkPassword(
  'rVrsfheokazBnvcgRnoWMFeUxCqpZsNq',
  'rrsfheokazBnvcgRnoWMFeUxCqpZsNq'
)