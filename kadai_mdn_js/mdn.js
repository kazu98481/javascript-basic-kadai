
const getDate = () => {
  //今日の日付
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  //日付の出力
  console.log(todayYear+"年"+todayMonth+"月"+todayDate+"日")
}

getDate();