import exp from "constants";
import { models, Schema,model,Document } from "mongoose";

export interface IEvent extends Document{
    _id:String;
    title: string;
    description?: string;
    location?: string;
    createAt?: string;
    imageUrl?: string;
    startDateTime?: string;
    endDateTime?: string;
    price?: string;
    isFree?: boolean;
    url?: string;
    category?: {_id :String , name:String};
    organizer?:{_id :String , firstName:String ,lastName:String};
}

const EventSchema = new Schema({
    title :{type :String,required : true},
    description :{type :String },
    location :{type:String},
    createAt:{type:String},
    imageUrl:{type:String},
    startDateTime :{type:String,default :Date.now},
    endDateTime:{type:String,default :Date.now},
    price:{type:String},
    isFree:{type:Boolean,default:false},
    url:{type:String},
    category:{type:Schema.Types.ObjectId,ref:'Categoory'},
    organizer:{type:Schema.Types.ObjectId,ref:"User"} 
})

const Event =models.Event || model('Event', EventSchema);

export default Event;