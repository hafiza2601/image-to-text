const Schema = mongoose.Schema;
const ocrSchema = new Schema({
    image: String,
    text: String,
    boldWords: [String]
});
const ocrModel = mongoose.model('Image', ocrSchema);