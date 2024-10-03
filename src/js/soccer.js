// const stadium = document.querySelector(".football__stadium");
// const ball = document.querySelector(".football__stadium-ball");

// function throwBall() {
//   stadium.addEventListener("click", (e) => {
//     console.log(e);
//     // const x = e.clientX - stadium.offsetLeft;
//     // const y = e.clientY - stadium.offsetTop;

//     // ball.style.left = x + "px";
//     // ball.style.top = y + "px";
//     let ballCords = {
//       top:
//         e.clientY -
//         stadium.top -
//         stadium.clientTop -
//         ball.clientHeight / 2,
//       left:
//         e.clientX -
//         stadium.left -
//         stadium.clientLeft -
//         ball.clientWidth / 2,
//     };

//     ball.style.left = ballCords.left + "px";
//     ball.style.top = ballCords.top + "px";
//   });
// }

// throwBall();

const stadium = document.querySelector(".football__stadium");
const ball = document.querySelector(".football__stadium-ball");

function throwBall() {
  stadium.addEventListener("click", (e) => {
    const ballWidthHalf = ball.clientWidth / 2;
    const ballHeightHalf = ball.clientHeight / 2;

    const fieldTop = parseInt(getComputedStyle(stadium).borderTopWidth, 10);
    const fieldLeft = parseInt(getComputedStyle(stadium).borderTopWidth, 10);
    const fieldWidth = stadium.clientWidth;
    const fieldHeight = stadium.clientHeight;

    const ballCords = {
      top: `${e.clientY - stadium.offsetTop - ballHeightHalf + 1100}px`,
      left: `${e.clientX - stadium.offsetLeft - ballWidthHalf}px`,
    };

    if (parseInt(ballCords.top) < fieldTop) {
        ballCords.top = `${fieldTop}px`;
    } else if (parseInt(ballCords.top) + ball.clientHeight > fieldHeight) {
        ballCords.top = `${fieldHeight - ball.clientHeight}px`;
    }

    if (parseInt(ballCords.left) < fieldLeft) {
        ballCords.left = `${fieldLeft}px`; 
    } else if (parseInt(ballCords.left) + ball.clientWidth > fieldWidth) {
        ballCords.left = `${fieldWidth - ball.clientWidth}px`;
    }

    ball.style.left = ballCords.left;
    ball.style.top = ballCords.top;
  });
}

throwBall();
