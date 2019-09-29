import MediaPlayer from '../mediaPlayer'
class AutoPause{
    threshold: number
    media: MediaPlayer
    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }
    run = function (player){
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })
    
        observer.observe(player.media)
    
        document.addEventListener('visibilitychange', this.handleVisibilityChange) 
    }

    private handleIntersection = function (entries: IntersectionObserverEntry[]){
        const [ entry ] = entries
        const isvisible = entry.intersectionRatio >=  this.threshold
        if (isvisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }
    
    private handleVisibilityChange = function (){
        const isVisible = document.visibilityState === 'visible'
        if (isVisible){
            this.player.play()
            document.title = 'PlatziMediaPlayer'
        }else{
            this.player.pause()
            document.title = 'Continua en el video'
        }
    }
}




export default AutoPause