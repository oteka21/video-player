import MediaPlayer from '../../mediaPlayer'
import Ads, { Ad } from './ads'

export default class AdsPlugin{
    private player: MediaPlayer
    private media: HTMLMediaElement
    private ads: Ads
    private currentAd: Ad
    private adsContainer: HTMLElement

    constructor(){
        this.ads = Ads.getInstance()
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
        this.adsContainer = document.createElement('div')
    }
    public run (player: MediaPlayer){
        console.log(player)
        this.player =  player
        console.log(this.player)
        // debugger
        this.player.container.appendChild(this.adsContainer)
        this.media = player.media
        this.media.addEventListener('timeupdate', this.handleTimeUpdate)
    }

    private handleTimeUpdate(){
        // console.log(this)
        const currentTime = Math.floor(this.media.currentTime)
        if(currentTime % 30 === 0){
            this.renderAd()
        }
    }

    private renderAd(){
        if(this.currentAd){
            return
        }
        const ad = this.ads.getAd()
        this.currentAd = ad
        
        // console.log(this.currentAd)
        this.adsContainer.innerHTML = `
        <div class="ads">
            <a class="ads__link"href="${this.currentAd.url}"target="_blank">
                <img class="ads__img"src="${this.currentAd.imageUrl}" />
                <div class="ads__info">
                <h5 class="ads__title">${this.currentAd.title}</h5>
                <p class="ads__body">${this.currentAd.body}</p>
                </div>
            </a>
        </div>
        <style>
            .ads *{
                box-sozing: border-box;
            }
            .ads{
                width: 100%;
                height: 90px;
                margin: 0 auto;
                position: absolute;
                bottom: 20px;
            }
            .ads__link{
                width: 90%;
                height: 100%;
                background: #fff;
                display: block;
                margin: 0 auto;
                padding: 8px;
                color: #000;
                text-decoration: none;
                display:flex;
            }
            .ads__img{
                height: 100%;
                width: auto;
            }
            .ads__info{
                margin-left: 10px;
            }
            .ads__title{
                margin: 0;
                padding: 0;
            }
        </style>`

        setTimeout(()=>{
            this.currentAd = null,
            this.adsContainer.innerHTML = ""
        }, 6000)
    }
}