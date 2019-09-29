class MediaPlayer {
    media: HTMLMediaElement
    plugins: any[]
    container: HTMLElement

    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPLayer()
        this.initPlugins()
    }

    private initPLayer(){
        this.container = document.createElement('div')
        this.container.style.position = 'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }

    private initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            container: this.container,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }
        this.plugins.forEach(plugin => {
            // console.log(plugin)
            plugin.run(player)
        })
    }

    mute() {
        this.media.muted = true
    }

    unmute() {
        this.media.muted = false
    }

    play() {
        this.media.play()
    }

    pause() {
        return this.media.pause()
    }

    togglePlay() {
        if (this.media.paused) {
            this.play()
        }
        else {
            this.pause()
        }
    }
    
    toggleMute() {
        if (this.media.muted) {
            this.unmute()
        }
        else {
            this.mute()
        }
    }
}

export default MediaPlayer