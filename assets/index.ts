import MediaPlayer from './mediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('.movie')
const playButton: HTMLElement = document.querySelector('#play')
const muteButton: HTMLElement = document.querySelector('#mute')


const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
]});

playButton.onclick = () => {
player.togglePlay()
}

muteButton.onclick = () => {
    player.toggleMute()
}

// if ('serviceWorker' in navigator){
//     navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message))
// }