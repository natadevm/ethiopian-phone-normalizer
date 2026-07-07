

export function normalize(phone) {
    if (!phone) {
        return null;
    }

   
    let value = String(phone)
        .trim()
        .replace(/[\s()-]/g, "");


    if (value.startsWith("+251")) {
        return value;
    }

    if (value.startsWith("251")) {
        return "+" + value;
    }
    if (value.startsWith("0")) {
        return "+251" + value.slice(1);
    }
    if (value.startsWith("9")) {
        return "+251" + value;
    }
    return null;
}