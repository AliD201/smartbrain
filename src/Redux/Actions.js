import {
  CHANGE_INPUT_FIELD,
  SET_IMAGE_URL,
  SET_BOX,
  SET_ROUTE,
  SIGNED_IN,
  ON_SUBMIT
} from './constants'


export const setInput = (text)=>{
  console.log('activated');
  return ({
    type: CHANGE_INPUT_FIELD,
    payload:text
  })
}
export const setimageUrl = (text)=> ({
  type: SET_IMAGE_URL,
  payload:text
})
export const setbox = (obj)=> {


  return ({
    type: SET_BOX,
    payload:obj
  })
}

<<<<<<< HEAD
// this later should be like requestRobots for real sign in
=======
// this later should be like requestRobots
>>>>>>> 2fa8fa56e98c761d153257729670b4e76bc1de92
export const setisSignedIn = (bool)=>{

  return ({
    type: SIGNED_IN,
    payload:bool
  })
}

export const setroute = (route)=> ({
  type: SET_ROUTE,
  payload:route
  })
