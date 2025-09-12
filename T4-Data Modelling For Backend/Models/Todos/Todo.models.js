import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    complete: {
        type: Boolean,
        default: false
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subTodo"
        }
    ]//Array of Subtodos
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)