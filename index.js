import mongoose, { model, Schema } from 'mongoose';

// ----------------------------------------------------------

await mongoose.connect('mongodb://localhost:27017/users');

// --- USER --------------------------------------------------------


const userSchema = new Schema(
    {
        Name: String,
        Alter: Number
    });

const UserModel = model("User", userSchema);


// --- POST --------------------------------------------------------


const postSchema = new Schema(
    {
        Titel: String,
        Inhalt: String,
        Autor: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    });

const PostModel = model("Post", postSchema);

// (3) -------------------------------------------


const user = new UserModel({
    Name: "Humphrey Bogart",
    Alter: 55
});
await user.save();

const user2 = await UserModel.create({
    Name: "Neil Armstrong",
    Alter: 39
});

const user3 = await UserModel.create({
    Name: "Chuck Berry",
    Alter: 60
});


// -----------------------------------------------

const post = new PostModel({
    Titel: "Mein erster Beitrag",
    Inhalt: "Aufgepasst Welt, ich bin im Anflug!",
    Author: user
})

const post2 = new PostModel({
    Titel: "Wussten Sie ...?",
    Inhalt: "... dass ich die Schauspielschule mit Summa cum laude abgeschlossen hab?",
    Author: user
})

await post.save();
await post2.save();

// ----------------

const post3 = await PostModel.create({
    Titel: "Können Sie es sehen?",
    Inhalt: "... meinen Fussabdruck auf dem Mond natürlich!",
    Author: user2
});

const post4 = await PostModel.create({
    Titel: "Wie lange dauert ein Tag auf dem Mond?",
    Inhalt: "... einen ganzen Monat. Holy Shit!",
    Author: user2
})

// ----------------

const post5 = await PostModel.create({
    Titel: "Ich komme aus Missouri!",
    Inhalt: "Was wollen sie wissen?",
    Author: user3
});

const post6 = await PostModel.create({
    Titel: "Hätten Sie gewusst?",
    Inhalt: "... dass ich als Erfinder des Duckwalks gelte?",
    Author: user3
})


// console.log(post);
// console.log(post2);
// console.log(post3);

// (4) -----------------------------------------


// const userWithSpecialPostID = await UserModel.findOne().populate(user);

// console.log("userWithSpecialPostID: ", userWithSpecialPostID);
