const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter exercise type"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Enter exercise in minutes"
            },
            distance: {
                type: Number
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
