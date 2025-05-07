let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let video = document.getElementById('backgroundVideo');
let clickCount = 0;
let noMuteClicked = false;

// No 按钮的文字变化
const noTexts = [
    "？再考虑一下？",
    "这份工作很不错的，再看看？",
    "别错过这个机会呀！ ",
    "加入我们，你会有很好的发展！",
    "别犹豫啦:("
];

// No 按钮点击事件
noButton.addEventListener("click", function () {
    clickCount++;

    // 第一次点击 '不要' 按钮时开始播放视频
    if (!noMuteClicked) {
        video.play();
        video.muted = false;
        noMuteClicked = true;
    }

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 让图片和文字往上移动
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shocked.png";
    if (clickCount === 2) mainImage.src = "images/think.png";
    if (clickCount === 3) mainImage.src = "images/angry.png";
    if (clickCount === 4) mainImage.src = "images/crying.png";
    if (clickCount >= 5) mainImage.src = "images/crying.png";
});

// Yes 按钮点击后，进入应聘成功页面
yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">期待你的加入！请将简历投递至 recruit_ai@xiaomi.com</h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});
