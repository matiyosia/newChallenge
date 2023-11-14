import { mock } from "../config/mockup"

export const serviceMock = {
   async getMock(){
        try {
            return  await mock
        } catch (error) {
            console.log(error)
        }
    }
}