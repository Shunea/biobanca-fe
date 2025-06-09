export const calculateAge = (birthDate: string) => {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const birthMonth = new Date(birthDate).getMonth();
  const currentMonth = new Date().getMonth();
  const birthDay = new Date(birthDate).getDate();
  const currentDay = new Date().getDate();
  const age = currentYear - birthYear;
  if (birthMonth > currentMonth) {
    return age - 1;
  } else if (birthMonth === currentMonth) {
    if (birthDay > currentDay) {
      return age - 1;
    }
  }
  return age;
};
