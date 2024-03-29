#! /usr/bin/env node
// make a birthday party event 
// make dinner first
// 8 guest are invited
let birthday = "Ali";
let ageOfAli = 5;
let guestInvited = 5;
let gifts;
// first guest come his name is rohan and he wished to ali and order in dinner is Shami Qabab.
import inquirer from "inquirer";
let prsentguest = await inquirer.prompt([
    {
        name: "guestname",
        message: "Enter Guest Name Who Attends A Party",
        type: "list",
        choices: ["Rohan", "Ahmed", "Imran", "Taha", "Saif"]
    }
]);
console.log(prsentguest);
/// 1st
if (prsentguest.guestname == "Rohan") {
    let Rohan = await inquirer.prompt([
        {
            name: "rohabPresentTha",
            message: "Rohan Are Present In Birthday",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    if (Rohan.rohabPresentTha == "Yes") {
        let rohan = await inquirer.prompt([
            {
                name: "rohanPresent",
                message: "Rohan Are Wished U In Your Birthday!",
                type: "list",
                choices: ["yes", "No"]
            },
            {
                name: "rohanDinnerOrder",
                message: "Which Things Rohan Orders In the Dinner!",
                type: "list",
                choices: ["Tikka", "Biryani", "MalaiBoti"]
            }
        ]);
        if (rohan.rohanDinnerOrder == "Tikka" || rohan.rohanDinnerOrder == "Biryani" || rohan.rohanDinnerOrder == "MalaiBoti") {
            console.log(`Rohan Order A ${rohan.rohanDinnerOrder} in a Dinner `);
        }
        // gift statement
        let gift = await inquirer.prompt([
            {
                name: "guestGift",
                message: "Kia 'Rohan' Nee Gift Dia!  (Ys/No)",
                type: "input"
            }
        ]);
        if (gift.guestGift == "Yes" || gift.guestGift == "yes" ||
            gift.guestGift == "Ys" || gift.guestGift == "ys") {
            console.log("ROHAN Give The Gift To Ali In His Birthday Party!");
        }
        else {
            console.log("ROHAN Give NO Any Gift To Ali In His Birthday Party!");
        }
    }
    else {
        console.log("Rohan Are Not Come IN Birthday Party..");
    }
}
////2nd
if (prsentguest.guestname == "Ahmed") {
    let Ahmed = await inquirer.prompt([
        {
            name: "AhmedPresentTha",
            message: "Ahmed Are Present In Birthday",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    if (Ahmed.AhmedPresentTha == "Yes") {
        let ahmed = await inquirer.prompt([
            {
                name: "AhmedPresent",
                message: "Ahmed Are Wished U In Your Birthday!",
                type: "list",
                choices: ["yes", "No"]
            },
            {
                name: "ahmedDinnerOrder",
                message: "Which Things Ahmed Orders In the Dinner!",
                type: "list",
                choices: ["Tikka", "Biryani", "MalaiBoti"]
            }
        ]);
        if (ahmed.ahmedDinnerOrder == "Tikka" || ahmed.ahmedDinnerOrder == "Biryani" || ahmed.ahmedDinnerOrder == "MalaiBoti") {
            console.log(`Ahmed Order A ${ahmed.ahmedDinnerOrder} in a Dinner `);
        }
        // gift statement
        let gift = await inquirer.prompt([
            {
                name: "guestGift",
                message: "Kia 'Ahmed' Nee Gift Dia!  (Ys/No)",
                type: "input"
            }
        ]);
        if (gift.guestGift == "Yes" || gift.guestGift == "yes" ||
            gift.guestGift == "Ys" || gift.guestGift == "ys") {
            console.log("AHMED Give The Gift To Ali In His Birthday Party!");
        }
        else {
            console.log("AHMED Give NO Any Gift To Ali In His Birthday Party!");
        }
    }
    else {
        console.log("Rohan Are Not Come IN Birthday Party..");
    }
}
///    3rd
if (prsentguest.guestname == "Imran") {
    let Ahmed = await inquirer.prompt([
        {
            name: "AhmedPresentTha",
            message: "Imran Are Present In Birthday Party",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    if (Ahmed.AhmedPresentTha == "Yes") {
        let ahmed = await inquirer.prompt([
            {
                name: "AhmedPresent",
                message: "Imran Are Wished U In Your Birthday!",
                type: "list",
                choices: ["yes", "No"]
            },
            {
                name: "ahmedDinnerOrder",
                message: "Which Things Imran Orders In the Dinner!",
                type: "list",
                choices: ["Tikka", "Biryani", "MalaiBoti"]
            }
        ]);
        if (ahmed.ahmedDinnerOrder == "Tikka" || ahmed.ahmedDinnerOrder == "Biryani" || ahmed.ahmedDinnerOrder == "MalaiBoti") {
            console.log(`Imran Order A ${ahmed.ahmedDinnerOrder} in a Dinner. `);
        }
        // gift statement
        let gift = await inquirer.prompt([
            {
                name: "guestGift",
                message: "Kia 'Imran' Nee Gift Dia!  (Ys/No)",
                type: "input"
            }
        ]);
        if (gift.guestGift == "Yes" || gift.guestGift == "yes" ||
            gift.guestGift == "Ys" || gift.guestGift == "ys") {
            console.log("IMRAN Give The Gift To Ali In His Birthday Party!");
        }
        else {
            console.log("IMRAN Give NO Any Gift To Ali In His Birthday Party!");
        }
    }
    else {
        console.log("Imran Are Not Come IN Birthday Party..");
    }
}
/// 4th
if (prsentguest.guestname == "Taha") {
    let Ahmed = await inquirer.prompt([
        {
            name: "AhmedPresentTha",
            message: "Taha Are Present In Birthday Party!",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    if (Ahmed.AhmedPresentTha == "Yes") {
        let ahmed = await inquirer.prompt([
            {
                name: "AhmedPresent",
                message: "Taha Are Wished U In Your Birthday!",
                type: "list",
                choices: ["yes", "No"]
            },
            {
                name: "ahmedDinnerOrder",
                message: "Which Things Taha Orders In the Dinner!",
                type: "list",
                choices: ["Tikka", "Biryani", "MalaiBoti"]
            }
        ]);
        if (ahmed.ahmedDinnerOrder == "Tikka" || ahmed.ahmedDinnerOrder == "Biryani" || ahmed.ahmedDinnerOrder == "MalaiBoti") {
            console.log(`Taha Order A ${ahmed.ahmedDinnerOrder} in a Dinner `);
        }
        // gift statement
        let gift = await inquirer.prompt([
            {
                name: "guestGift",
                message: "Kia 'Taha' Nee Gift Dia!  (Ys/No)",
                type: "input"
            }
        ]);
        if (gift.guestGift == "Yes" || gift.guestGift == "yes" ||
            gift.guestGift == "Ys" || gift.guestGift == "ys") {
            console.log("TAHA Give The Gift To Ali In His Birthday Party!");
        }
        else {
            console.log("TAHA Give NO Any Gift To Ali In His Birthday Party!");
        }
    }
    else {
        console.log("Taha Are Not Come IN Birthday Party..");
    }
}
/// 5th
if (prsentguest.guestname == "Saif") {
    let Ahmed = await inquirer.prompt([
        {
            name: "AhmedPresentTha",
            message: "Saif Are Present In Birthday Party!",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    if (Ahmed.AhmedPresentTha == "Yes") {
        let ahmed = await inquirer.prompt([
            {
                name: "AhmedPresent",
                message: "Saif Are Wished U In Your Birthday!",
                type: "list",
                choices: ["yes", "No"]
            },
            {
                name: "ahmedDinnerOrder",
                message: "Which Things 'Saif' Orders In the Dinner!",
                type: "list",
                choices: ["Tikka", "Biryani", "MalaiBoti"]
            }
        ]);
        if (ahmed.ahmedDinnerOrder == "Tikka" || ahmed.ahmedDinnerOrder == "Biryani" || ahmed.ahmedDinnerOrder == "MalaiBoti") {
            console.log(` 'Saif' Order A ${ahmed.ahmedDinnerOrder} in a Dinner `);
        }
        // gift statement
        let gift = await inquirer.prompt([
            {
                name: "guestGift",
                message: "Kia 'Saif' Nee Gift Dia!  (Ys/No)",
                type: "input"
            }
        ]);
        if (gift.guestGift == "Yes" || gift.guestGift == "yes" ||
            gift.guestGift == "Ys" || gift.guestGift == "ys") {
            console.log("SAIF Give The Gift To Ali In His Birthday Party!");
        }
        else {
            console.log("SAIF Give NO Any Gift To Ali In His Birthday Party!");
        }
    }
    else {
        console.log("'Saif' Are Not Come IN Birthday Party..");
    }
}
else {
}
