import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver'

export const getRandomPrompt = () => {
const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length)
return surpriseMePrompts[randomIndex]
}

export const downloadImage = async(_id, photo)=> {
FileSaver.saveAs(photo, `download-${_id}.jpg`)
}

