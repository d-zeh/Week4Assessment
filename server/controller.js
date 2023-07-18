const database = []
const showcase = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getInv: (req, res) => {
        for (let i = 0; i < database.length; i++) {
            showcase.push(database[i].garmet_name)
        }
        res.status(200).send((showcase))
    },

    getZoltar: (req, res) => {
        const fortune = [
            "Your future is filled with great adventures and exciting opportunities.",
            "A new chapter in your life will bring prosperity and happiness.",
            "A long-awaited wish will soon be granted. Keep believing.",
            "Your creative talents will lead to success and recognition.",
            "A special someone will enter your life and bring love and joy.",
            "Take risks and embrace change. It will lead to personal growth.",
            "Your hard work and determination will pay off in unexpected ways.",
            "Travel to new places will broaden your horizons and bring inspiration.",
            "Be patient and trust the process. The best is yet to come.",
            "Embrace challenges as opportunities for growth and self-discovery."];
        let time = new Date().getTime();
        let time2 = time*time -69
        let random = time2 % 10
        res.status(200).send(fortune[random]);
    },
    addGarmet: (req, res) => {
        const {garmet_name, season, dept, selling, purchased, aquired} = req.body
        let db = {}
        db.garmet_name = garmet_name
        db.season = season
        db.dept = dept
        db.selling = selling
        db.purchased = purchased
        db.aquired = aquired
        db.referenceNum = database.length+1
        database.push(db)
        res.status(200).send(db)
    },

lookup: (req,res) => {
    const {lookNum} = req.params
    const indexofItem = database.findIndex(item => item.referenceNum === +lookNum)
    if (indexofItem === -1) {
        res.status(400).send(`Item not found`)
        return
    }
    res.status(200).send(database[indexofItem])
    }
}
