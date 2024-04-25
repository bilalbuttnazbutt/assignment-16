let guest_list: string[] = [`maryam`,`ansar`,`sana`,`sadia`,`nazish`];
let not_coming: string = `maryam`;
let new_guest:  string = `hina`;
guest_list[0] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.`);
}  

console.log(`ms ${not_coming}, is not coming for dinner tomorrow.`)

guest_list.unshift(`naveed`);
guest_list.splice(guest_list.length/2, 2, `Messi`);
guest_list.push(`ayaz`);
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\n`);
}
console.log(`me have found a bigger dinner table so me invited more guests`);