// Global variable for current language
let currentLang = 'pt-BR'; // Default to Portuguese

// Function to map currentLang to JSON keys
function getLangKey(lang) {
    return lang === 'pt-BR' ? 'pt' : 'en';
}

// Modules data - EMBEDDED DIRECTLY for offline functionality
let modulesData = {
  "module-1": {
    "en": {
      "title": "📖 Module 1: English Alphabet & Pronunciation",
      "objective": "Learn the 26 letters of the English alphabet and their sounds. Master basic pronunciation rules.",
      "parts": [
        {
          "title": "Part 1: The English Alphabet",
          "content": "Practice the 26 letters with audio:",
          "vocabulary": [
            {"letter": "A", "sound": "A"},
            {"letter": "B", "sound": "B"},
            {"letter": "C", "sound": "C"},
            {"letter": "D", "sound": "D"},
            {"letter": "E", "sound": "E"},
            {"letter": "F", "sound": "F"},
            {"letter": "G", "sound": "G"},
            {"letter": "H", "sound": "H"},
            {"letter": "I", "sound": "I"},
            {"letter": "J", "sound": "J"},
            {"letter": "K", "sound": "K"},
            {"letter": "L", "sound": "L"},
            {"letter": "M", "sound": "M"},
            {"letter": "N", "sound": "N"},
            {"letter": "O", "sound": "O"},
            {"letter": "P", "sound": "P"},
            {"letter": "Q", "sound": "Q"},
            {"letter": "R", "sound": "R"},
            {"letter": "S", "sound": "S"},
            {"letter": "T", "sound": "T"},
            {"letter": "U", "sound": "U"},
            {"letter": "V", "sound": "V"},
            {"letter": "W", "sound": "W"},
            {"letter": "X", "sound": "X"},
            {"letter": "Y", "sound": "Y"},
            {"letter": "Z", "sound": "Z"}
          ]
        },
        {
          "title": "Part 2: Common Letter Combinations",
          "content": "Vowel Teams: AI/AY: rain, day, play; EE/EA: tree, sea, read; OA/OW: boat, snow, grow. Silent Letters: Silent K: knife, knee, know; Silent W: write, wrong, wrap."
        }
      ],
      "exercises": [
        {
          "title": "Exercise 1.1: Write the Alphabet",
          "description": "Practice writing the entire alphabet (uppercase and lowercase):",
          "type": "textarea"
        },
        {
          "title": "Exercise 1.2: Vowels and Consonants",
          "description": "Vowels: A, E, I, O, U. Consonants: All other letters. Question: Circle the vowels in this word: APPLE",
          "type": "input"
        },
        {
          "title": "Exercise 1.3: Pronunciation Practice",
          "description": "Practice saying these common English sounds:",
          "vocabulary": [
            {"sound": "TH", "examples": "Think, Thank, Three"},
            {"sound": "CH", "examples": "Chair, Church, Cheese"},
            {"sound": "SH", "examples": "She, Ship, Shop"},
            {"sound": "R", "examples": "Red, Run, Right"}
          ]
        },
        {
          "title": "Exercise 1.4: Identify the Sound",
          "description": "Which letter makes the 'K' sound in these words?",
          "questions": [
            {"word": "Cat", "options": ["C", "K"]},
            {"word": "Kite", "options": ["C", "K"]},
            {"word": "Clock", "options": ["C", "K"]}
          ]
        }
      ]
    },
    "pt": {
      "title": "📖 Módulo 1: Alfabeto Inglês & Pronúncia",
      "objective": "Aprenda as 26 letras do alfabeto inglês e seus sons. Domine regras básicas de pronúncia.",
      "parts": [
        {
          "title": "Parte 1: O Alfabeto Inglês",
          "content": "Pratique as 26 letras com áudio:",
          "vocabulary": [
            {"letter": "A", "sound": "A"},
            {"letter": "B", "sound": "B"},
            {"letter": "C", "sound": "C"},
            {"letter": "D", "sound": "D"},
            {"letter": "E", "sound": "E"},
            {"letter": "F", "sound": "F"},
            {"letter": "G", "sound": "G"},
            {"letter": "H", "sound": "H"},
            {"letter": "I", "sound": "I"},
            {"letter": "J", "sound": "J"},
            {"letter": "K", "sound": "K"},
            {"letter": "L", "sound": "L"},
            {"letter": "M", "sound": "M"},
            {"letter": "N", "sound": "N"},
            {"letter": "O", "sound": "O"},
            {"letter": "P", "sound": "P"},
            {"letter": "Q", "sound": "Q"},
            {"letter": "R", "sound": "R"},
            {"letter": "S", "sound": "S"},
            {"letter": "T", "sound": "T"},
            {"letter": "U", "sound": "U"},
            {"letter": "V", "sound": "V"},
            {"letter": "W", "sound": "W"},
            {"letter": "X", "sound": "X"},
            {"letter": "Y", "sound": "Y"},
            {"letter": "Z", "sound": "Z"}
          ]
        },
        {
          "title": "Parte 2: Combinações Comuns de Letras",
          "content": "Equipes Vocálicas: AI/AY: rain, day, play; EE/EA: tree, sea, read; OA/OW: boat, snow, grow. Letras Silenciosas: K Silencioso: knife, knee, know; W Silencioso: write, wrong, wrap."
        }
      ],
      "exercises": [
        {
          "title": "Exercício 1.1: Escreva o Alfabeto",
          "description": "Pratique escrevendo o alfabeto inteiro (maiúsculo e minúsculo):",
          "type": "textarea"
        },
        {
          "title": "Exercício 1.2: Vogais e Consoantes",
          "description": "Vogais: A, E, I, O, U. Consoantes: Todas as outras letras. Pergunta: Circule as vogais nesta palavra: APPLE",
          "type": "input"
        },
        {
          "title": "Exercício 1.3: Prática de Pronúncia",
          "description": "Pratique dizendo estes sons comuns em inglês:",
          "vocabulary": [
            {"sound": "TH", "examples": "Think, Thank, Three"},
            {"sound": "CH", "examples": "Chair, Church, Cheese"},
            {"sound": "SH", "examples": "She, Ship, Shop"},
            {"sound": "R", "examples": "Red, Run, Right"}
          ]
        },
        {
          "title": "Exercício 1.4: Identifique o Som",
          "description": "Qual letra faz o som 'K' nestas palavras?",
          "questions": [
            {"word": "Cat", "options": ["C", "K"]},
            {"word": "Kite", "options": ["C", "K"]},
            {"word": "Clock", "options": ["C", "K"]}
          ]
        }
      ]
    }
  },
  "module-2": {
    "en": {
      "title": "👋 Module 2: Greetings & Introductions",
      "objective": "Learn how to greet people, introduce yourself, and ask simple questions.",
      "parts": [
        {
          "title": "Greetings",
          "content": "Basic greetings:",
          "vocabulary": [
            {"word": "Hello", "translation": "Olá"},
            {"word": "Hi", "translation": "Oi"},
            {"word": "Good morning", "translation": "Bom dia"},
            {"word": "Good afternoon", "translation": "Boa tarde"},
            {"word": "Good evening", "translation": "Boa noite (chegada)"},
            {"word": "Good night", "translation": "Boa noite (despedida)"},
            {"word": "Goodbye", "translation": "Adeus / Tchau"},
            {"word": "See you later", "translation": "Até logo"}
          ]
        },
        {
          "title": "Introducing Yourself",
          "content": "Key phrases:",
          "vocabulary": [
            {"phrase": "My name is...", "translation": "Meu nome é..."},
            {"phrase": "I am...", "translation": "Eu sou..."},
            {"phrase": "Nice to meet you", "translation": "Prazer em conhecê-lo"},
            {"phrase": "How are you?", "translation": "Como você está?"},
            {"phrase": "I'm fine, thank you", "translation": "Estou bem, obrigado"}
          ]
        },
        {
          "title": "More Useful Expressions",
          "vocabulary": [
            {"word": "Thank you", "translation": "Obrigado"},
            {"word": "You're welcome", "translation": "De nada"},
            {"word": "Excuse me / Sorry", "translation": "Com licença / Desculpe"},
            {"word": "Please", "translation": "Por favor"},
            {"word": "Yes / No", "translation": "Sim / Não"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 2.1: Complete the Dialogue",
          "description": "Person A: Hello! My name is Sarah. What's your name? Person B: [input] Person A: Nice to meet you! Person B: [input]"
        },
        {
          "title": "Exercise 2.2: Translate to English",
          "questions": [
            {"pt": "Olá, meu nome é Carlos", "en": "Hello, my name is Carlos"},
            {"pt": "Prazer em conhecê-lo", "en": "Nice to meet you"},
            {"pt": "Como você está?", "en": "How are you?"}
          ]
        },
        {
          "title": "Exercise 2.3: Complete the Conversation",
          "description": "Situation: Meeting someone at a party A: Good evening! I'm Maria. What's your name? B: [input] A: Nice to meet you! Where are you from? B: [input] A: That's great! Are you enjoying the party? B: [input]"
        }
      ]
    },
    "pt": {
      "title": "👋 Módulo 2: Cumprimentos & Apresentações",
      "objective": "Aprenda a cumprimentar pessoas, se apresentar e fazer perguntas simples.",
      "parts": [
        {
          "title": "Cumprimentos",
          "content": "Cumprimentos básicos:",
          "vocabulary": [
            {"word": "Hello", "translation": "Olá"},
            {"word": "Hi", "translation": "Oi"},
            {"word": "Good morning", "translation": "Bom dia"},
            {"word": "Good afternoon", "translation": "Boa tarde"},
            {"word": "Good evening", "translation": "Boa noite (chegada)"},
            {"word": "Good night", "translation": "Boa noite (despedida)"},
            {"word": "Goodbye", "translation": "Adeus / Tchau"},
            {"word": "See you later", "translation": "Até logo"}
          ]
        },
        {
          "title": "Apresentando-se",
          "content": "Frases chave:",
          "vocabulary": [
            {"phrase": "My name is...", "translation": "Meu nome é..."},
            {"phrase": "I am...", "translation": "Eu sou..."},
            {"phrase": "Nice to meet you", "translation": "Prazer em conhecê-lo"},
            {"phrase": "How are you?", "translation": "Como você está?"},
            {"phrase": "I'm fine, thank you", "translation": "Estou bem, obrigado"}
          ]
        },
        {
          "title": "Mais Expressões Úteis",
          "vocabulary": [
            {"word": "Thank you", "translation": "Obrigado"},
            {"word": "You're welcome", "translation": "De nada"},
            {"word": "Excuse me / Sorry", "translation": "Com licença / Desculpe"},
            {"word": "Please", "translation": "Por favor"},
            {"word": "Yes / No", "translation": "Sim / Não"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 2.1: Complete o Diálogo",
          "description": "Pessoa A: Olá! Meu nome é Sarah. Qual é o seu nome? Pessoa B: [input] Pessoa A: Prazer em conhecê-la! Pessoa B: [input]"
        },
        {
          "title": "Exercício 2.2: Traduza para o Inglês",
          "questions": [
            {"pt": "Olá, meu nome é Carlos", "en": "Hello, my name is Carlos"},
            {"pt": "Prazer em conhecê-lo", "en": "Nice to meet you"},
            {"pt": "Como você está?", "en": "How are you?"}
          ]
        },
        {
          "title": "Exercício 2.3: Complete a Conversa",
          "description": "Situação: Conhecendo alguém em uma festa A: Boa noite! Eu sou Maria. Qual é o seu nome? B: [input] A: Prazer em conhecê-la! De onde você é? B: [input] A: Que ótimo! Você está gostando da festa? B: [input]"
        }
      ]
    }
  },
  "module-3": {
    "en": {
      "title": "🔢 Module 3: Numbers & Time",
      "objective": "Learn numbers from 1-100, telling time, and basic math operations.",
      "parts": [
        {
          "title": "Numbers 1-20",
          "content": "Learn the basic numbers:",
          "vocabulary": [
            {"word": "One", "translation": "Um"},
            {"word": "Two", "translation": "Dois"},
            {"word": "Three", "translation": "Três"},
            {"word": "Four", "translation": "Quatro"},
            {"word": "Five", "translation": "Cinco"},
            {"word": "Six", "translation": "Seis"},
            {"word": "Seven", "translation": "Sete"},
            {"word": "Eight", "translation": "Oito"},
            {"word": "Nine", "translation": "Nove"},
            {"word": "Ten", "translation": "Dez"}
          ]
        },
        {
          "title": "Telling Time",
          "content": "Basic time expressions:",
          "vocabulary": [
            {"phrase": "What time is it?", "translation": "Que horas são?"},
            {"phrase": "It's 3 o'clock", "translation": "São 3 horas"},
            {"phrase": "Half past three", "translation": "Três e meia"},
            {"phrase": "Quarter past three", "translation": "Três e quinze"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 3.1: Count to 20",
          "description": "Practice counting from 1 to 20:",
          "type": "textarea"
        },
        {
          "title": "Exercise 3.2: Tell the Time",
          "description": "Write the time in words:",
          "questions": [
            {"word": "2:00", "options": []},
            {"word": "4:30", "options": []}
          ]
        }
      ]
    },
    "pt": {
      "title": "🔢 Módulo 3: Números & Horas",
      "objective": "Aprenda números de 1-100, dizer as horas e operações básicas de matemática.",
      "parts": [
        {
          "title": "Números 1-20",
          "content": "Aprenda os números básicos:",
          "vocabulary": [
            {"word": "One", "translation": "Um"},
            {"word": "Two", "translation": "Dois"},
            {"word": "Three", "translation": "Três"},
            {"word": "Four", "translation": "Quatro"},
            {"word": "Five", "translation": "Cinco"},
            {"word": "Six", "translation": "Seis"},
            {"word": "Seven", "translation": "Sete"},
            {"word": "Eight", "translation": "Oito"},
            {"word": "Nine", "translation": "Nove"},
            {"word": "Ten", "translation": "Dez"}
          ]
        },
        {
          "title": "Dizer as Horas",
          "content": "Expressões básicas de tempo:",
          "vocabulary": [
            {"phrase": "What time is it?", "translation": "Que horas são?"},
            {"phrase": "It's 3 o'clock", "translation": "São 3 horas"},
            {"phrase": "Half past three", "translation": "Três e meia"},
            {"phrase": "Quarter past three", "translation": "Três e quinze"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 3.1: Conte até 20",
          "description": "Pratique contar de 1 a 20:",
          "type": "textarea"
        },
        {
          "title": "Exercício 3.2: Diga as Horas",
          "description": "Escreva a hora em palavras:",
          "questions": [
            {"word": "2:00", "options": []},
            {"word": "4:30", "options": []}
          ]
        }
      ]
    }
  },
  "module-4": {
    "en": {
      "title": "👨 Module 4: Verb 'To Be'",
      "objective": "Learn the verb 'to be' in present tense, contractions, and negative forms.",
      "parts": [
        {
          "title": "The Verb 'To Be'",
          "content": "Present tense forms:",
          "vocabulary": [
            {"form": "I am", "contraction": "I'm", "example": "I am a student"},
            {"form": "You are", "contraction": "You're", "example": "You are tall"},
            {"form": "He is", "contraction": "He's", "example": "He is happy"},
            {"form": "She is", "contraction": "She's", "example": "She is a teacher"},
            {"form": "It is", "contraction": "It's", "example": "It is cold"},
            {"form": "We are", "contraction": "We're", "example": "We are friends"},
            {"form": "They are", "contraction": "They're", "example": "They are here"}
          ]
        },
        {
          "title": "Negative Forms",
          "content": "Add 'not' after the verb:",
          "examples": [
            "I am not (I'm not) tired",
            "You are not (You're not) late",
            "He is not (He's not) sick"
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 4.1: Fill in the blanks",
          "questions": [
            "I ___ a student.",
            "She ___ happy.",
            "We ___ friends."
          ]
        },
        {
          "title": "Exercise 4.2: Make negative",
          "questions": [
            "I am tired → I ___ tired",
            "She is happy → She ___ happy"
          ]
        }
      ]
    },
    "pt": {
      "title": "👨 Módulo 4: Verbo 'To Be'",
      "objective": "Aprenda o verbo 'to be' no presente, contrações e formas negativas.",
      "parts": [
        {
          "title": "O Verbo 'To Be'",
          "content": "Formas no presente:",
          "vocabulary": [
            {"form": "I am", "contraction": "I'm", "example": "I am a student"},
            {"form": "You are", "contraction": "You're", "example": "You are tall"},
            {"form": "He is", "contraction": "He's", "example": "He is happy"},
            {"form": "She is", "contraction": "She's", "example": "She is a teacher"},
            {"form": "It is", "contraction": "It's", "example": "It is cold"},
            {"form": "We are", "contraction": "We're", "example": "We are friends"},
            {"form": "They are", "contraction": "They're", "example": "They are here"}
          ]
        },
        {
          "title": "Formas Negativas",
          "content": "Adicione 'not' depois do verbo:",
          "examples": [
            "I am not (I'm not) tired",
            "You are not (You're not) late",
            "He is not (He's not) sick"
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 4.1: Preencha os espaços",
          "questions": [
            "I ___ a student.",
            "She ___ happy.",
            "We ___ friends."
          ]
        },
        {
          "title": "Exercício 4.2: Faça negativo",
          "questions": [
            "I am tired → I ___ tired",
            "She is happy → She ___ happy"
          ]
        }
      ]
    }
  },
  "module-5": {
    "en": {
      "title": "🏠 Module 5: Family & Home",
      "objective": "Learn family member names, home vocabulary, and describe your living space.",
      "parts": [
        {
          "title": "Family Members",
          "content": "Learn family vocabulary:",
          "vocabulary": [
            {"word": "Father", "translation": "Pai"},
            {"word": "Mother", "translation": "Mãe"},
            {"word": "Brother", "translation": "Irmão"},
            {"word": "Sister", "translation": "Irmã"},
            {"word": "Grandfather", "translation": "Avô"},
            {"word": "Grandmother", "translation": "Avó"}
          ]
        },
        {
          "title": "Home Vocabulary",
          "content": "Rooms and furniture:",
          "vocabulary": [
            {"word": "Kitchen", "translation": "Cozinha"},
            {"word": "Bedroom", "translation": "Quarto"},
            {"word": "Living room", "translation": "Sala de estar"},
            {"word": "Bathroom", "translation": "Banheiro"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 5.1: Describe Your Family",
          "description": "Write a short paragraph about your family:",
          "type": "textarea"
        },
        {
          "title": "Exercise 5.2: My Home",
          "description": "Describe the rooms in your home:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "🏠 Módulo 5: Família & Casa",
      "objective": "Aprenda nomes dos membros da família, vocabulário de casa e descreva seu espaço de viver.",
      "parts": [
        {
          "title": "Membros da Família",
          "content": "Aprenda vocabulário familiar:",
          "vocabulary": [
            {"word": "Father", "translation": "Pai"},
            {"word": "Mother", "translation": "Mãe"},
            {"word": "Brother", "translation": "Irmão"},
            {"word": "Sister", "translation": "Irmã"},
            {"word": "Grandfather", "translation": "Avô"},
            {"word": "Grandmother", "translation": "Avó"}
          ]
        },
        {
          "title": "Vocabulário de Casa",
          "content": "Cômodos e móveis:",
          "vocabulary": [
            {"word": "Kitchen", "translation": "Cozinha"},
            {"word": "Bedroom", "translation": "Quarto"},
            {"word": "Living room", "translation": "Sala de estar"},
            {"word": "Bathroom", "translation": "Banheiro"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 5.1: Descreva Sua Família",
          "description": "Escreva um parágrafo curto sobre sua família:",
          "type": "textarea"
        },
        {
          "title": "Exercício 5.2: Minha Casa",
          "description": "Descreva os cômodos da sua casa:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-6": {
    "en": {
      "title": "📅 Module 6: Daily Routines & Activities",
      "objective": "Learn about daily activities and routines.",
      "parts": [
        {
          "title": "Daily Routines",
          "content": "Common daily activities:",
          "vocabulary": [
            {"word": "Wake up", "translation": "Acordar"},
            {"word": "Brush teeth", "translation": "Escovar os dentes"},
            {"word": "Eat breakfast", "translation": "Tomar café da manhã"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 6.1: My Daily Routine",
          "description": "Describe your daily routine:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "📅 Módulo 6: Rotinas Diárias e Atividades",
      "objective": "Aprenda sobre atividades e rotinas diárias.",
      "parts": [
        {
          "title": "Rotinas Diárias",
          "content": "Atividades comuns do dia:",
          "vocabulary": [
            {"word": "Wake up", "translation": "Acordar"},
            {"word": "Brush teeth", "translation": "Escovar os dentes"},
            {"word": "Eat breakfast", "translation": "Tomar café da manhã"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 6.1: Minha Rotina Diária",
          "description": "Descreva sua rotina diária:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-7": {
    "en": {
      "title": "⌛ Module 7: Present Simple",
      "objective": "Learn the present simple tense.",
      "parts": [
        {
          "title": "Present Simple Grammar",
          "content": "Basic rules for present simple:",
          "vocabulary": [
            {"word": "I eat", "translation": "Eu como"},
            {"word": "You work", "translation": "Você trabalha"},
            {"word": "He/She runs", "translation": "Ele/Ela corre"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 7.1: Conjugate Verbs",
          "description": "Conjugate the verb 'to eat' in present simple:",
          "questions": [
            "I ___",
            "You ___",
            "He ___"
          ]
        }
      ]
    },
    "pt": {
      "title": "⌛ Módulo 7: Presente Simples",
      "objective": "Aprenda o tempo presente simples.",
      "parts": [
        {
          "title": "Gramática do Presente Simples",
          "content": "Regras básicas do presente simples:",
          "vocabulary": [
            {"word": "I eat", "translation": "Eu como"},
            {"word": "You work", "translation": "Você trabalha"},
            {"word": "He/She runs", "translation": "Ele/Ela corre"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 7.1: Conjugue os Verbos",
          "description": "Conjugue o verbo 'to eat' no presente simples:",
          "questions": [
            "I ___",
            "You ___",
            "He ___"
          ]
        }
      ]
    }
  },
  "module-8": {
    "en": {
      "title": "👋 Module 8: Introducing Yourself",
      "objective": "Learn how to introduce yourself properly.",
      "parts": [
        {
          "title": "Self Introduction",
          "content": "Key phrases for introduction:",
          "vocabulary": [
            {"phrase": "My name is...", "translation": "Meu nome é..."},
            {"phrase": "I am from...", "translation": "Eu sou de..."},
            {"phrase": "I work as...", "translation": "Eu trabalho como..."}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 8.1: Introduce Yourself",
          "description": "Write a short introduction about yourself:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "👋 Módulo 8: Apresentando-se",
      "objective": "Aprenda a se apresentar adequadamente.",
      "parts": [
        {
          "title": "Apresentação Pessoal",
          "content": "Frases chave para apresentação:",
          "vocabulary": [
            {"phrase": "My name is...", "translation": "Meu nome é..."},
            {"phrase": "I am from...", "translation": "Eu sou de..."},
            {"phrase": "I work as...", "translation": "Eu trabalho como..."}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 8.1: Apresente-se",
          "description": "Escreva uma breve apresentação sobre você:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-9": {
    "en": {
      "title": "📚 Module 9: Basic Adjectives",
      "objective": "Learn common adjectives to describe things.",
      "parts": [
        {
          "title": "Common Adjectives",
          "content": "Basic descriptive words:",
          "vocabulary": [
            {"word": "Big", "translation": "Grande"},
            {"word": "Small", "translation": "Pequeno"},
            {"word": "Happy", "translation": "Feliz"},
            {"word": "Sad", "translation": "Triste"},
            {"word": "Hot", "translation": "Quente"},
            {"word": "Cold", "translation": "Frio"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 9.1: Describe Objects",
          "description": "Use adjectives to describe: a big house, a small car, happy people.",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "📚 Módulo 9: Adjetivos Básicos",
      "objective": "Aprenda adjetivos comuns para descrever coisas.",
      "parts": [
        {
          "title": "Adjetivos Comuns",
          "content": "Palavras descritivas básicas:",
          "vocabulary": [
            {"word": "Big", "translation": "Grande"},
            {"word": "Small", "translation": "Pequeno"},
            {"word": "Happy", "translation": "Feliz"},
            {"word": "Sad", "translation": "Triste"},
            {"word": "Hot", "translation": "Quente"},
            {"word": "Cold", "translation": "Frio"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 9.1: Descreva Objetos",
          "description": "Use adjetivos para descrever: uma casa grande, um carro pequeno, pessoas felizes.",
          "type": "textarea"
        }
      ]
    }
  },
  "module-10": {
    "en": {
      "title": "🍽️ Module 10: Food & Drinks",
      "objective": "Learn vocabulary related to food and beverages.",
      "parts": [
        {
          "title": "Food Vocabulary",
          "content": "Common foods and drinks:",
          "vocabulary": [
            {"word": "Apple", "translation": "Maçã"},
            {"word": "Bread", "translation": "Pão"},
            {"word": "Water", "translation": "Água"},
            {"word": "Milk", "translation": "Leite"},
            {"word": "Coffee", "translation": "Café"},
            {"word": "Rice", "translation": "Arroz"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 10.1: Favorite Foods",
          "description": "List your 5 favorite foods and drinks:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "🍽️ Módulo 10: Comida e Bebidas",
      "objective": "Aprenda vocabulário relacionado a comida e bebidas.",
      "parts": [
        {
          "title": "Vocabulário de Comida",
          "content": "Alimentos e bebidas comuns:",
          "vocabulary": [
            {"word": "Apple", "translation": "Maçã"},
            {"word": "Bread", "translation": "Pão"},
            {"word": "Water", "translation": "Água"},
            {"word": "Milk", "translation": "Leite"},
            {"word": "Coffee", "translation": "Café"},
            {"word": "Rice", "translation": "Arroz"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 10.1: Comidas Favoritas",
          "description": "Liste suas 5 comidas e bebidas favoritas:",
          "type": "textarea"
        }
      ]
    }
  }
};

let dataLoaded = true;

// Initialize immediately since data is embedded
console.log('🚀 Initializing application with embedded data...');
console.log(`✅ Embedded modules loaded: ${Object.keys(modulesData).length} modules`);
// generateModuleNavigation(); // Commented out since navigation is now static in HTML

// Text-to-speech function
function speakText(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();

        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);

        // Set language based on current language
        utterance.lang = currentLang === 'pt-BR' ? 'pt-BR' : 'en-US';

        // Set voice properties
        utterance.rate = 0.8; // Slightly slower
        utterance.pitch = 1;

        // Speak
        speechSynthesis.speak(utterance);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
}

// Function to toggle module accordion
function toggleModule(moduleId) {
    const contentDiv = document.getElementById('content-' + moduleId);
    if (!contentDiv) return;

    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
        if (!contentDiv.innerHTML.trim()) { // if not loaded yet
            renderModuleToDiv(moduleId, contentDiv);
        }
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
}

// Function to render a module to a specific div
function renderModuleToDiv(moduleId, container) {
    if (!modulesData) {
        container.innerHTML = '<p>Loading module data...</p>';
        return;
    }

    try {
        const langKey = getLangKey(currentLang);
        if (!modulesData[moduleId] || !modulesData[moduleId][langKey]) {
            throw new Error(`Module ${moduleId} or language ${langKey} not found`);
        }

        const moduleData = modulesData[moduleId][langKey];

        // Generate HTML
        let html = `
            <section id="${moduleId}" class="module-section">
                <h2>${moduleData.title}</h2>
                <p><strong>Objetivo:</strong> ${moduleData.objective}</p>
        `;

        // Add parts
        if (moduleData.parts) {
            moduleData.parts.forEach(part => {
                html += `<h3>${part.title}</h3>`;
                if (part.content) {
                    html += `<p>${part.content}</p>`;
                }
                if (part.vocabulary) {
                    html += '<div class="vocab-list">';
                    part.vocabulary.forEach(item => {
                        try {
                            if (item.letter && item.sound) {
                                html += `
                                    <div class="vocab-item">
                                        <strong data-speak="${item.sound}">${item.letter}</strong>
                                        <button class="speak-btn" onclick="speakText('${item.sound}')">🔊 Hear</button>
                                    </div>
                                `;
                            } else if (item.word && item.translation) {
                                html += `
                                    <div class="vocab-item">
                                        <strong>${item.word}</strong>
                                        <em>${item.translation}</em>
                                        <button class="speak-btn" onclick="speakText('${item.word}')">🔊</button>
                                    </div>
                                `;
                            } else if (item.phrase && item.translation) {
                                html += `
                                    <div class="vocab-item">
                                        <strong>${item.phrase}</strong>
                                        <em>${item.translation}</em>
                                        <button class="speak-btn" onclick="speakText('${item.phrase}')">🔊</button>
                                    </div>
                                `;
                            } else if (item.form && item.example) {
                                html += `
                                    <div class="vocab-item">
                                        <strong>${item.form}</strong> ${item.contraction ? `(${item.contraction})` : ''}
                                        <em>${item.example}</em>
                                        <button class="speak-btn" onclick="speakText('${item.example}')">🔊</button>
                                    </div>
                                `;
                            } else if (item.sound && item.examples) {
                                html += `
                                    <div class="vocab-item">
                                        <strong>${item.sound}:</strong> ${item.examples}
                                        <button class="speak-btn" onclick="speakText('${item.examples}')">🔊</button>
                                    </div>
                                `;
                            } else {
                                // Fallback para itens desconhecidos
                                const textToSpeak = item.word || item.phrase || item.form || item.sound || Object.values(item)[0] || 'unknown';
                                const displayText = Object.values(item).join(' - ') || 'Unknown item';
                                html += `
                                    <div class="vocab-item">
                                        <strong>${displayText}</strong>
                                        <button class="speak-btn" onclick="speakText('${textToSpeak}')">🔊</button>
                                    </div>
                                `;
                            }
                        } catch (itemError) {
                            console.warn('Error processing vocabulary item:', item, itemError);
                            html += `<div class="vocab-item"><strong>Error loading item</strong></div>`;
                        }
                    });
                    html += '</div>';
                }
            });
        }

        // Add exercises
        if (moduleData.exercises) {
            moduleData.exercises.forEach(exercise => {
                html += `
                    <div class="exercise-box">
                        <h4>${exercise.title}</h4>
                        <p>${exercise.description}</p>
                `;
                if (exercise.type === 'textarea') {
                    html += '<textarea rows="3" placeholder="Your answer here..."></textarea>';
                } else if (exercise.type === 'input') {
                    html += '<input type="text" placeholder="Your answer..." />';
                } else if (exercise.questions) {
                    exercise.questions.forEach(q => {
                        if (q.word) {
                            html += `<p>${q.word}: <input type="text" placeholder="${q.options ? q.options.join(' or ') : 'Answer'}" /></p>`;
                        } else if (q.pt) {
                            html += `<p>${q.pt}: <input type="text" placeholder="Translation" /></p>`;
                        } else {
                            html += `<p>${q}</p>`;
                        }
                    });
                }
                html += '</div>';
            });
        }

        html += '</section>';

        // Inject into container
        container.innerHTML = html;

    } catch (error) {
        console.warn('Module not found:', moduleId, error);
        const moduleNumber = moduleId.replace('module-', '');
        container.innerHTML = `
            <div class="module-section" style="text-align: center; padding: 20px;">
                <h3>� Module ${moduleNumber}: Coming Soon</h3>
                <p>This module is under preparation. Basic content will be available soon!</p>
                <p style="font-size: 14px; color: #666;">🇧🇷 Este módulo está sendo preparado. Conteúdo básico estará disponível em breve!</p>
                <div style="text-align: left; margin-top: 20px;">
                    <h4>Quick Practice:</h4>
                    <p>Try writing 5 English words you know:</p>
                    <textarea rows="3" placeholder="Write your words here..." style="width: 100%; padding: 8px;"></textarea>
                    <br><br>
                    <p>Translate: "Hello, how are you?"</p>
                    <input type="text" placeholder="Your translation..." style="width: 100%; padding: 8px;">
                </div>
            </div>
        `;
    }
}

// Function to generate module navigation dynamically
function generateModuleNavigation() {
    console.log('Generating module navigation...');
    const accordionDiv = document.getElementById('module-accordion');
    if (!accordionDiv) {
        console.error('Module accordion div not found!');
        return;
    }

    if (!modulesData) {
        console.error('Modules data not loaded!');
        return;
    }

    console.log('Modules data keys:', Object.keys(modulesData).length);
    let html = '';

    // Get all module keys and sort them numerically
    const moduleKeys = Object.keys(modulesData).sort((a, b) => {
        const numA = parseInt(a.replace('module-', ''));
        const numB = parseInt(b.replace('module-', ''));
        return numA - numB;
    });

    console.log('Module keys found:', moduleKeys.length, moduleKeys);

    // Generate accordion items for each module
    moduleKeys.forEach(moduleKey => {
        try {
            // Use currentLang directly since it matches JSON keys ('pt-BR' or 'en-US')
            const moduleData = modulesData[moduleKey][currentLang];

            if (!moduleData || !moduleData.title) {
                console.warn(`Module ${moduleKey} has invalid data structure for language ${currentLang}`);
                return; // Skip this module
            }

            const moduleNumber = moduleKey.replace('module-', '');
            const titleParts = moduleData.title.split(' ');
            const emoji = titleParts.length > 0 ? titleParts[0] : '📖';
            const title = titleParts.length > 1 ? titleParts.slice(1).join(' ') : moduleData.title;

            console.log(`Processing module ${moduleNumber}: ${title}`);

            html += `
                <div class="module-item">
                    <button class="module-btn" onclick="toggleModule('${moduleKey}')">${emoji} Module ${moduleNumber}: ${title}</button>
                    <div id="content-${moduleKey}" class="module-content" style="display: none;"></div>
                </div>
            `;
        } catch (error) {
            console.warn(`Error processing module ${moduleKey}:`, error);
            // Add a fallback button for broken modules
            const moduleNumber = moduleKey.replace('module-', '');
            html += `
                <div class="module-item">
                    <button class="module-btn" disabled style="opacity: 0.5;">❌ Module ${moduleNumber}: Error loading</button>
                    <div id="content-${moduleKey}" class="module-content" style="display: none;"></div>
                </div>
            `;
        }
    });

    console.log('Generated HTML for', moduleKeys.length, 'modules');
    accordionDiv.innerHTML = html;
}

// Function to render a module (legacy, for single module)
function renderModule(moduleId, lang = currentLang) {
    const contentDiv = document.getElementById('module-content');
    if (contentDiv) {
        renderModuleToDiv(moduleId, contentDiv);
    }
}

// DOM Content Loaded - ensure navigation is generated if not already done
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - navigation is static, no generation needed.');
    // if (dataLoaded && modulesData) {
    //     const accordionDiv = document.getElementById('module-accordion');
    //     if (accordionDiv && !accordionDiv.innerHTML.trim()) {
    //         console.log('Generating navigation on DOM load...');
    //         generateModuleNavigation();
    //     }
    // }
});
