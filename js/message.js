const listMessage = [
    {
        title: "Workdate in Ru:tine Coffee",
        message: `Tôi với em yêu của tôi hiện tại chưa có ảnh chụp chung nhưng chúng tôi có video quay chung với nhau
                        nè.`,
        comment: "Xem xong video có thể thấy 2 chúng tôi đã vui và cười với nhau nhiều như nào",
        video: './video/workdate.mp4'
    },
    {
        title: "Quay tiktok ở Ru:tine Coffee",
        message: `Em yêu khen video này đẹp, và tôi cũng thấy như vậy. Video này tôi cũng hơi thuộc bài nên có chút tự tin`,
        comment: "Tôi bị ngại nhưng mà vì em yêu thích nên tôi đã cố bước ra khỏi sự nhút nhát, ngại ngùng này",
        video: './video/quaytiktok.mp4'
    }
    , {
        title: "Video tặng quà Valentine cho em yêu",
        message: `Hôm đó tôi tặng quà Valentine, tôi cứ lo vì tôi không thể làm kịp quà và bó hoa lúc tôi làm xong ở nhà nó bị xấu xấu`,
        comment: "Nhưng không cô ấy khen hoa đẹp, cô ấy cũng khen Socola đẹp, thơm và ngon. Hôm đó tôi vui lắm",
        video: './video/valentines.mp4'
    }
]

const finalMessage = [
    {
        title: "Chúc mừng năm mới em yêu !!!",
        message: `Nhân dịp năm mới, anh chúc em yêu và gia đình năm mới nhiều sức khỏe, gặp nhiều may mắn, công việc thuận lợi. Chúc bác gái sớm khỏe ạ`,
        comment: `Anh hi vọng rằng người bên cạnh em trong 2026 và những năm tới vẫn luôn là anh. Yêu thương, quan tâm nhau nhiều hơn nhó. Chúng ta cùng thực hiện những điều đối phương mong muốn và tránh xa/ hạn chế những thứ làm ảnh hưởng tới cảm xúc của nhau nhé. Những chuyện buồn, chuyện không vui hãy nhớ bỏ nó sang một bên nhé. Và đây là món quà anh tặng em. https://lixi.momo.vn/lixi/bBRQj9pZv44K5PL`,
        video: './video/chucemyeu.mp4'
    }
]

let currentMessageIndex = 0;


const nextMessage = () => {
    const modalTitle = document.getElementById('modalTitle')
    const messageModal = document.getElementById('message-modal')
    const commentModal = document.getElementById('comment-modal')
    const videoModal = document.getElementById('video-modal')
    const preBtn = document.getElementById('preBtn')
    const nextBtn = document.getElementById('nextBtn')

    if (currentMessageIndex < listMessage.length) {
        currentMessageIndex++
        if (currentMessageIndex == listMessage.length - 1) {
            nextBtn.classList.add('d-none')
        } else {
            nextBtn.classList.remove('d-none')
        }
        preBtn.classList.remove('d-none')
        modalTitle.innerHTML = listMessage[currentMessageIndex].title
        messageModal.innerHTML = listMessage[currentMessageIndex].message
        commentModal.innerHTML = listMessage[currentMessageIndex].comment
        videoModal.src = listMessage[currentMessageIndex].video
    }
}


const preMessage = () => {
    const modalTitle = document.getElementById('modalTitle')
    const messageModal = document.getElementById('message-modal')
    const commentModal = document.getElementById('comment-modal')
    const videoModal = document.getElementById('video-modal')
    const preBtn = document.getElementById('preBtn')
    const nextBtn = document.getElementById('nextBtn')
    if (currentMessageIndex > 0) {
        currentMessageIndex--
        if (currentMessageIndex == 0) {
            preBtn.classList.add('d-none')
        } else {
            preBtn.classList.remove('d-none')
        }
        nextBtn.classList.remove('d-none')
        modalTitle.innerHTML = listMessage[currentMessageIndex].title
        messageModal.innerHTML = listMessage[currentMessageIndex].message
        commentModal.innerHTML = listMessage[currentMessageIndex].comment
        videoModal.src = listMessage[currentMessageIndex].video
    }

}

const test = () => {
    const modalTitle = document.getElementById('modalTitle')
    const messageModal = document.getElementById('message-modal')
    const commentModal = document.getElementById('comment-modal')
    const videoModal = document.getElementById('video-modal')
    const preBtn = document.getElementById('preBtn')
    const nextBtn = document.getElementById('nextBtn')
    const isDone = localStorage.getItem("isDone")

    if (isDone) {
        nextBtn.classList.add('d-none')
        preBtn.classList.add('d-none')
        modalTitle.innerHTML = finalMessage[0].title
        messageModal.innerHTML = finalMessage[0].message
        commentModal.innerHTML = finalMessage[0].comment
        videoModal.src = finalMessage[0].video
    }
}
