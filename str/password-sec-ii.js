function checkPassword(password, password_repeat) {
  if (password.length < 8 || password !== password_repeat) return false;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&$%§\-+_]).{8,}$/;
  return regex.test(password)
}

checkPassword(
  'omvdsseaa',
  'omvdsseaa'
) // f
  
checkPassword(
  'HUIFDSJHKSADN',
  'HUIFDSJHKSADN'
) // f

checkPassword(
  'YY&glk4Hfi_ffS',
  'YY&glk4Hfi_ffS'
) // t

checkPassword(
  'Joifd$3',
  'Joifd$3'
) // f

checkPassword(
  'JoFDd$0MY6Ad4',
  'JoFDd$0MY6Ad4'
)

checkPassword(
  'JoFDd#0MY6Ad4',
  'JoFDd#0MY6Ad4'
)

checkPassword(
  'EY8J62',
  'EY8J62'
)

checkPassword(
  'UR9G1GOF',
  'UR9G1GOF'
)

checkPassword(
  '6BKYT2GY8CX7CFPC',
  '6BKYT2GY8CX7CFPC'
)

checkPassword(
  'JIOfdsf&fdsflk',
  'JIOfdsf&fdsflk'
)

checkPassword(
  'kg4N%sPrX$H',
  'kg4N%sPrX$H'
)

checkPassword(
  'ono53a7suikzb3h7',
  'ono53a7suikzb3h7'
)

checkPassword(
  'qn%5F',
  'qn%5F'
)

checkPassword(
  '0&J&xxQYmD§kx§k$AO',
  '0&J&xxQYmD§kx§k$AO'
)

checkPassword(
  '0&J&xxQYmD§kx§k$AO',
  '0&J&xxQYmD§kx§k$Ao'
)

checkPassword(
  '0#J#xxQYmD#kx#k#AO',
  '0#J#xxQYmD#kx#k#AO'
)