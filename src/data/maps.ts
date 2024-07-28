/*
import sunset from '../images/sunset.png'
import sunsetBanned from '../images/sunset-banned.png'
*/
import bind from '../images/bind.png'
import bindBanned from '../images/bind-banned.png'
import icebox from '../images/icebox.png'
import iceboxBanned from '../images/icebox-banned.png'
import lotus from '../images/lotus.png'
import lotusBanned from '../images/lotus-banned.png'
import ascent from '../images/ascent.png'
import ascentBanned from '../images/ascent-banned.png'
import haven from '../images/haven.png'
import havenBanned from '../images/haven-banned.png'
import split from '../images/split.png'
import splitBanned from '../images/split-banned.png'

export const maps = [
    {
        "name": "Sunset",
        "image": "https://raw.githubusercontent.com/pro-boys/mapban/main/src/images/sunset.png",
        "istwo": false,
        "banimage": "https://github.com/pro-boys/mapban/blob/main/src/images/sunset-banned.png?raw=true",
    },
    {
        "name": "Bind",
        "image": bind,
        "istwo": false,
        "banimage": bindBanned,
    },
    {
        "name": "IceBox",
        "image": icebox,
        "istwo": false,
        "banimage": iceboxBanned,
    },
    {
        "name": "Lotus",
        "image": lotus,
        "istwo": false,
        "banimage": lotusBanned,
    },
    {
        "name": "Ascent",
        "image": ascent,
        "istwo": (window.innerWidth > 730 && window.innerWidth < 1280)? true: false,
        "banimage": ascentBanned,
    },
    {
        "name": "Haven",
        "image": haven,
        "istwo": true,
        "banimage": havenBanned,
    },
    {
        "name": "Split",
        "image": split,
        "istwo": true,
        "banimage": splitBanned,
    },
]