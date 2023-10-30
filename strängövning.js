
// Skriv en funktion som du skickar en bokstav till som inparameter.
// Funktionen ska returnera true om bokstaven är en vokal
// (a, e, i, o, u, y, å, ä, ö) och false annars.

function vokal(bokstav) {
  let vokaler = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"]

  if (vokaler.includes(bokstav)) {
    return true
  } else {
    return false
  }
}



// Skriv en funktion till vilken man skickar ett antal ord -
// funktionen ska returnera det längsta ordet
// (samt om flera ord är längst /
// lika långa det ord som är först i alfabetet).

function longestWord(x, y, z) {
  let words = [x, y, z]
  let biggest = ""

  for (let n of words) {
    if (n.length > biggest.length) {
      biggest = n
    }
  }
  return biggest
}



// Astrid Lindgren uppfann rövarspråket.Det fungerar så här,
// varje konsonant(b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z)
// ersätts med sig själv + “o” + sig själv igen.

// Exempel: “Ska vi gå ut i skogen ?” blir
// “Soskoka vovi gogå utot i soskokogogenon ?” på rövarspråk.

// Skriv en funktion som översätter en sträng du skickar till den
// till rövarspråk och returnerar översättningen.

function robberLanguage(string) {
  const konsonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
  let robber = ""

  for (let n of string) {
    if (konsonant.includes(n.toLowerCase())) {
      robber = robber + n + "o" + n
    } else {
      robber += n

    }
  }
  return robber
}



// Skriv en funktion som översätter en sträng du skickar till den från rövarspråk
// till svenska / vanlig text och returnerar översättningen.

function robberTranslate(robber) {
  const konsonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
  let translation = ""

  // om currentChar är konsonant, ta bort dem 2 nästa index
  for (let i = 0; i < robber.length; i++) {
    let currentChar = robber[i]
    if (!konsonant.includes(currentChar)) {
      translation += currentChar
    } else {
      translation += currentChar
      i += 2
      }
    }
    return translation
  }



console.log(robberTranslate("soskoka vovi gogå utot i soskokogogenon"))








