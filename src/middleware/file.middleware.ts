import Multer from 'koa-multer'
import path from 'path'
import { AVATAR_PATH, PICTURE_PATH } from '../constant/file-path'

const avatarStorage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, AVATAR_PATH)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const pictureStorage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PICTURE_PATH)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const avatarUpload = Multer({
  dest: AVATAR_PATH,
  storage: avatarStorage
})

const pictureUpload = Multer({
  dest: PICTURE_PATH,
  storage: pictureStorage
})

const avatarHandler = avatarUpload.single('avatar')
const pictureHandler = pictureUpload.single('picture')

export { avatarHandler, pictureHandler }
