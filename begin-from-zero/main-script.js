// Global variable for current language
let currentLang = 'pt-BR'; // Default to Portuguese

// Function to map currentLang to JSON keys
function getLangKey(lang) {
    switch(lang) {
        case 'pt-BR': return 'pt';
        case 'en-US': return 'en';
        case 'es-ES': return 'es';
        case 'zh-CN': return 'zh';
        default: return 'en';
    }
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
    },
    "es": {
      "title": "📖 Módulo 1: Alfabeto Inglés & Pronunciación",
      "objective": "Aprende las 26 letras del alfabeto inglés y sus sonidos. Domina reglas básicas de pronunciación.",
      "parts": [
        {
          "title": "Parte 1: El Alfabeto Inglés",
          "content": "Practica las 26 letras con audio:",
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
          "title": "Parte 2: Combinaciones Comunes de Letras",
          "content": "Equipos Vocálicos: AI/AY: rain, day, play; EE/EA: tree, sea, read; OA/OW: boat, snow, grow. Letras Silenciosas: K Silenciosa: knife, knee, know; W Silenciosa: write, wrong, wrap."
        }
      ],
      "exercises": [
        {
          "title": "Ejercicio 1.1: Escribe el Alfabeto",
          "description": "Practica escribiendo el alfabeto entero (mayúscula y minúscula):",
          "type": "textarea"
        },
        {
          "title": "Ejercicio 1.2: Vocales y Consonantes",
          "description": "Vocales: A, E, I, O, U. Consonantes: Todas las otras letras. Pregunta: Circula las vocales en esta palabra: APPLE",
          "type": "input"
        },
        {
          "title": "Ejercicio 1.3: Práctica de Pronunciación",
          "description": "Practica diciendo estos sonidos comunes en inglés:",
          "vocabulary": [
            {"sound": "TH", "examples": "Think, Thank, Three"},
            {"sound": "CH", "examples": "Chair, Church, Cheese"},
            {"sound": "SH", "examples": "She, Ship, Shop"},
            {"sound": "R", "examples": "Red, Run, Right"}
          ]
        },
        {
          "title": "Ejercicio 1.4: Identifica el Sonido",
          "description": "¿Qué letra hace el sonido 'K' en estas palabras?",
          "questions": [
            {"word": "Cat", "options": ["C", "K"]},
            {"word": "Kite", "options": ["C", "K"]},
            {"word": "Clock", "options": ["C", "K"]}
          ]
        }
      ]
    },
    "zh": {
      "title": "📖 模块 1：英语字母与发音",
      "objective": "学习26个英文字母及其发音。掌握基本发音规则。",
      "parts": [
        {
          "title": "第1部分：英语字母",
          "content": "用音频练习26个字母：",
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
          "title": "第2部分：常见字母组合",
          "content": "元音队：AI/AY：rain, day, play；EE/EA：tree, sea, read；OA/OW：boat, snow, grow。无声字母：无声K：knife, knee, know；无声W：write, wrong, wrap。"
        }
      ],
      "exercises": [
        {
          "title": "练习 1.1：写字母",
          "description": "练习写完整的字母（大写和小写）：",
          "type": "textarea"
        },
        {
          "title": "练习 1.2：元音和辅音",
          "description": "元音：A, E, I, O, U。辅音：所有其他字母。问题：在单词APPLE中圈出元音",
          "type": "input"
        },
        {
          "title": "练习 1.3：发音练习",
          "description": "练习说出这些常见的英语发音：",
          "vocabulary": [
            {"sound": "TH", "examples": "Think, Thank, Three"},
            {"sound": "CH", "examples": "Chair, Church, Cheese"},
            {"sound": "SH", "examples": "She, Ship, Shop"},
            {"sound": "R", "examples": "Red, Run, Right"}
          ]
        },
        {
          "title": "练习 1.4：识别发音",
          "description": "在这些单词中，哪个字母发'K'音？",
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
    },
    "es": {
      "title": "👋 Módulo 2: Saludos y Presentaciones",
      "objective": "Aprende a saludar a las personas, presentarte y hacer preguntas simples.",
      "parts": [
        {
          "title": "Saludos",
          "content": "Saludos básicos:",
          "vocabulary": [
            {"word": "Hello", "translation": "Hola"},
            {"word": "Hi", "translation": "Hola"},
            {"word": "Good morning", "translation": "Buenos días"},
            {"word": "Good afternoon", "translation": "Buenas tardes"},
            {"word": "Good evening", "translation": "Buenas noches (llegada)"},
            {"word": "Good night", "translation": "Buenas noches (despedida)"},
            {"word": "Goodbye", "translation": "Adiós / Chau"},
            {"word": "See you later", "translation": "Hasta luego"}
          ]
        },
        {
          "title": "Presentándote",
          "content": "Frases clave:",
          "vocabulary": [
            {"phrase": "My name is...", "translation": "Mi nombre es..."},
            {"phrase": "I am...", "translation": "Yo soy..."},
            {"phrase": "Nice to meet you", "translation": "Encantado de conocerte"},
            {"phrase": "How are you?", "translation": "¿Cómo estás?"},
            {"phrase": "I'm fine, thank you", "translation": "Estoy bien, gracias"}
          ]
        },
        {
          "title": "Más Expresiones Útiles",
          "vocabulary": [
            {"word": "Thank you", "translation": "Gracias"},
            {"word": "You're welcome", "translation": "De nada"},
            {"word": "Excuse me / Sorry", "translation": "Disculpe / Lo siento"},
            {"word": "Please", "translation": "Por favor"},
            {"word": "Yes / No", "translation": "Sí / No"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Ejercicio 2.1: Completa el Diálogo",
          "description": "Persona A: Hola! Mi nombre es Sarah. ¿Cuál es tu nombre? Persona B: [input] Persona A: Encantado de conocerte! Persona B: [input]"
        },
        {
          "title": "Ejercicio 2.2: Traduce al Inglés",
          "questions": [
            {"pt": "Hola, mi nombre es Carlos", "en": "Hello, my name is Carlos"},
            {"pt": "Encantado de conocerte", "en": "Nice to meet you"},
            {"pt": "¿Cómo estás?", "en": "How are you?"}
          ]
        },
        {
          "title": "Ejercicio 2.3: Completa la Conversación",
          "description": "Situación: Conociendo a alguien en una fiesta A: Buenas noches! Soy María. ¿Cuál es tu nombre? B: [input] A: Encantada de conocerte! ¿De dónde eres? B: [input] A: Qué genial! ¿Estás disfrutando de la fiesta? B: [input]"
        }
      ]
    },
    "zh": {
      "title": "👋 模块 2：问候与介绍",
      "objective": "学习如何问候他人、自我介绍和提出简单问题。",
      "parts": [
        {
          "title": "问候",
          "content": "基本问候语：",
          "vocabulary": [
            {"word": "Hello", "translation": "你好"},
            {"word": "Hi", "translation": "嗨"},
            {"word": "Good morning", "translation": "早上好"},
            {"word": "Good afternoon", "translation": "下午好"},
            {"word": "Good evening", "translation": "晚上好（到达）"},
            {"word": "Good night", "translation": "晚安（告别）"},
            {"word": "Goodbye", "translation": "再见 / 拜拜"},
            {"word": "See you later", "translation": "再见"}
          ]
        },
        {
          "title": "自我介绍",
          "content": "关键短语：",
          "vocabulary": [
            {"phrase": "My name is...", "translation": "我的名字是..."},
            {"phrase": "I am...", "translation": "我是..."},
            {"phrase": "Nice to meet you", "translation": "很高兴认识你"},
            {"phrase": "How are you?", "translation": "你怎么样？"},
            {"phrase": "I'm fine, thank you", "translation": "我很好，谢谢"}
          ]
        },
        {
          "title": "更多有用的表达",
          "vocabulary": [
            {"word": "Thank you", "translation": "谢谢"},
            {"word": "You're welcome", "translation": "不客气"},
            {"word": "Excuse me / Sorry", "translation": "打扰了 / 对不起"},
            {"word": "Please", "translation": "请"},
            {"word": "Yes / No", "translation": "是 / 不是"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "练习 2.1：完成对话",
          "description": "人A：你好！我的名字是Sarah。你叫什么名字？人B：[input] 人A：很高兴认识你！人B：[input]"
        },
        {
          "title": "练习 2.2：翻译成英语",
          "questions": [
            {"pt": "你好，我的名字是Carlos", "en": "Hello, my name is Carlos"},
            {"pt": "很高兴认识你", "en": "Nice to meet you"},
            {"pt": "你怎么样？", "en": "How are you?"}
          ]
        },
        {
          "title": "练习 2.3：完成对话",
          "description": "情境：在派对上认识某人 A：晚上好！我叫María。你叫什么名字？B：[input] A：很高兴认识你！你来自哪里？B：[input] A：太棒了！你玩得开心吗？B：[input]"
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
      "objective": "Learn how to introduce yourself and ask for directions.",
      "parts": [
        {
          "title": "Part 1: Common Phrases",
          "content": "Key phrases for introductions:",
          "vocabulary": [
            {"word": "Hello, my name is...", "translation": "Olá, meu nome é..."},
            {"word": "What's your name?", "translation": "Qual é o seu nome?"},
            {"word": "Nice to meet you", "translation": "Prazer em conhecê-lo"},
            {"word": "Where are you from?", "translation": "De onde você é?"},
            {"word": "I'm from Brazil", "translation": "Eu sou do Brasil"}
          ]
        },
        {
          "title": "Part 2: Common Locations",
          "content": "Places in the city:",
          "vocabulary": [
            {"word": "Bank", "translation": "Banco"},
            {"word": "Hospital", "translation": "Hospital"},
            {"word": "Restaurant", "translation": "Restaurante"},
            {"word": "Supermarket", "translation": "Supermercado"},
            {"word": "Post office", "translation": "Correio"},
            {"word": "Train station", "translation": "Estação de trem"},
            {"word": "Bus stop", "translation": "Ponto de ônibus"},
            {"word": "Airport", "translation": "Aeroporto"}
          ]
        },
        {
          "title": "Part 3: Asking for Directions",
          "content": "Useful phrases for navigation:",
          "vocabulary": [
            {"word": "Where is...?", "translation": "Onde fica...?"},
            {"word": "How do I get to...?", "translation": "Como eu chego em...?"},
            {"word": "Is it far?", "translation": "É longe?"},
            {"word": "Can you show me on the map?", "translation": "Pode me mostrar no mapa?"},
            {"word": "I'm lost", "translation": "Estou perdido"},
            {"word": "Thank you for your help", "translation": "Obrigado pela ajuda"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 8.1: Complete the dialogue",
          "description": "A: Hello, ___ your name?\nB: My name ___ Maria. What's ___?\nA: I'm John. Nice ___ meet you.\nB: Nice to ___ you too. Where ___ you from?",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "👋 Módulo 8: Apresentando-se",
      "objective": "Aprenda a se apresentar e pedir direções.",
      "parts": [
        {
          "title": "Parte 1: Frases Comuns",
          "content": "Frases chave para apresentações:",
          "vocabulary": [
            {"word": "Hello, my name is...", "translation": "Olá, meu nome é..."},
            {"word": "What's your name?", "translation": "Qual é o seu nome?"},
            {"word": "Nice to meet you", "translation": "Prazer em conhecê-lo"},
            {"word": "Where are you from?", "translation": "De onde você é?"},
            {"word": "I'm from Brazil", "translation": "Eu sou do Brasil"}
          ]
        },
        {
          "title": "Parte 2: Localizações Comuns",
          "content": "Lugares na cidade:",
          "vocabulary": [
            {"word": "Bank", "translation": "Banco"},
            {"word": "Hospital", "translation": "Hospital"},
            {"word": "Restaurant", "translation": "Restaurante"},
            {"word": "Supermarket", "translation": "Supermercado"},
            {"word": "Post office", "translation": "Correio"},
            {"word": "Train station", "translation": "Estação de trem"},
            {"word": "Bus stop", "translation": "Ponto de ônibus"},
            {"word": "Airport", "translation": "Aeroporto"}
          ]
        },
        {
          "title": "Parte 3: Pedindo Direções",
          "content": "Frases úteis para navegação:",
          "vocabulary": [
            {"word": "Where is...?", "translation": "Onde fica...?"},
            {"word": "How do I get to...?", "translation": "Como eu chego em...?"},
            {"word": "Is it far?", "translation": "É longe?"},
            {"word": "Can you show me on the map?", "translation": "Pode me mostrar no mapa?"},
            {"word": "I'm lost", "translation": "Estou perdido"},
            {"word": "Thank you for your help", "translation": "Obrigado pela ajuda"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 8.1: Complete o diálogo",
          "description": "A: Hello, ___ your name?\nB: My name ___ Maria. What's ___?\nA: I'm John. Nice ___ meet you.\nB: Nice to ___ you too. Where ___ you from?",
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

// Additional modules 11-23 from HTML conversion
Object.assign(modulesData, {
  "module-11": {
    "en": {
      "title": "💼 Module 11: Work & Professions",
      "objective": "Learn vocabulary related to jobs and workplaces.",
      "parts": [
        {
          "title": "Professions",
          "content": "Common jobs and occupations:",
          "vocabulary": [
            {"word": "Teacher", "translation": "Professor"},
            {"word": "Doctor", "translation": "Médico"},
            {"word": "Engineer", "translation": "Engenheiro"},
            {"word": "Nurse", "translation": "Enfermeiro"},
            {"word": "Chef", "translation": "Cozinheiro"},
            {"word": "Driver", "translation": "Motorista"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 11.1: What do they do?",
          "description": "Match professions with their descriptions:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "💼 Módulo 11: Trabalho & Profissões",
      "objective": "Aprenda vocabulário relacionado a empregos e locais de trabalho.",
      "parts": [
        {
          "title": "Profissões",
          "content": "Empregos e ocupações comuns:",
          "vocabulary": [
            {"word": "Teacher", "translation": "Professor"},
            {"word": "Doctor", "translation": "Médico"},
            {"word": "Engineer", "translation": "Engenheiro"},
            {"word": "Nurse", "translation": "Enfermeiro"},
            {"word": "Chef", "translation": "Cozinheiro"},
            {"word": "Driver", "translation": "Motorista"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 11.1: O que eles fazem?",
          "description": "Relacione profissões com suas descrições:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-12": {
    "en": {
      "title": "✈️ Module 12: Travel & Transportation",
      "objective": "Learn vocabulary for traveling and transportation.",
      "parts": [
        {
          "title": "Transportation",
          "content": "Ways to travel:",
          "vocabulary": [
            {"word": "Car", "translation": "Carro"},
            {"word": "Bus", "translation": "Ônibus"},
            {"word": "Train", "translation": "Trem"},
            {"word": "Plane", "translation": "Avião"},
            {"word": "Bike", "translation": "Bicicleta"},
            {"word": "Taxi", "translation": "Táxi"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 12.1: Travel Plans",
          "description": "Describe how you would travel to different places:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "✈️ Módulo 12: Viagem & Transporte",
      "objective": "Aprenda vocabulário para viagens e transporte.",
      "parts": [
        {
          "title": "Transporte",
          "content": "Formas de viajar:",
          "vocabulary": [
            {"word": "Car", "translation": "Carro"},
            {"word": "Bus", "translation": "Ônibus"},
            {"word": "Train", "translation": "Trem"},
            {"word": "Plane", "translation": "Avião"},
            {"word": "Bike", "translation": "Bicicleta"},
            {"word": "Taxi", "translation": "Táxi"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 12.1: Planos de Viagem",
          "description": "Descreva como você viajaria para diferentes lugares:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-13": {
    "en": {
      "title": "⚕️ Module 13: Health & Body Parts",
      "objective": "Learn vocabulary related to health and human body.",
      "parts": [
        {
          "title": "Body Parts",
          "content": "Parts of the body:",
          "vocabulary": [
            {"word": "Head", "translation": "Cabeça"},
            {"word": "Arm", "translation": "Braço"},
            {"word": "Leg", "translation": "Perna"},
            {"word": "Hand", "translation": "Mão"},
            {"word": "Foot", "translation": "Pé"},
            {"word": "Eye", "translation": "Olho"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 13.1: Body Parts",
          "description": "Label the parts of the body:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "⚕️ Módulo 13: Saúde & Partes do Corpo",
      "objective": "Aprenda vocabulário relacionado à saúde e ao corpo humano.",
      "parts": [
        {
          "title": "Partes do Corpo",
          "content": "Partes do corpo:",
          "vocabulary": [
            {"word": "Head", "translation": "Cabeça"},
            {"word": "Arm", "translation": "Braço"},
            {"word": "Leg", "translation": "Perna"},
            {"word": "Hand", "translation": "Mão"},
            {"word": "Foot", "translation": "Pé"},
            {"word": "Eye", "translation": "Olho"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 13.1: Partes do Corpo",
          "description": "Identifique as partes do corpo:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-14": {
    "en": {
      "title": "🌤️ Module 14: Weather & Seasons",
      "objective": "Learn vocabulary for weather conditions and seasons.",
      "parts": [
        {
          "title": "Weather",
          "content": "Weather conditions:",
          "vocabulary": [
            {"word": "Sunny", "translation": "Ensolarado"},
            {"word": "Rainy", "translation": "Chuvoso"},
            {"word": "Cloudy", "translation": "Nublado"},
            {"word": "Windy", "translation": "Ventoso"},
            {"word": "Snowy", "translation": "Nevado"},
            {"word": "Hot", "translation": "Quente"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 14.1: Weather Report",
          "description": "Describe the weather in your city:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "🌤️ Módulo 14: Tempo & Estações",
      "objective": "Aprenda vocabulário para condições climáticas e estações.",
      "parts": [
        {
          "title": "Tempo",
          "content": "Condições climáticas:",
          "vocabulary": [
            {"word": "Sunny", "translation": "Ensolarado"},
            {"word": "Rainy", "translation": "Chuvoso"},
            {"word": "Cloudy", "translation": "Nublado"},
            {"word": "Windy", "translation": "Ventoso"},
            {"word": "Snowy", "translation": "Nevado"},
            {"word": "Hot", "translation": "Quente"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 14.1: Relatório do Tempo",
          "description": "Descreva o tempo na sua cidade:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-15": {
    "en": {
      "title": "🛒 Module 15: Shopping & Money",
      "objective": "Learn vocabulary for shopping and financial terms.",
      "parts": [
        {
          "title": "Shopping",
          "content": "Shopping vocabulary:",
          "vocabulary": [
            {"word": "Store", "translation": "Loja"},
            {"word": "Buy", "translation": "Comprar"},
            {"word": "Sell", "translation": "Vender"},
            {"word": "Price", "translation": "Preço"},
            {"word": "Cheap", "translation": "Barato"},
            {"word": "Expensive", "translation": "Caro"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 15.1: Shopping List",
          "description": "Make a shopping list and prices:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "🛒 Módulo 15: Compras & Dinheiro",
      "objective": "Aprenda vocabulário para compras e termos financeiros.",
      "parts": [
        {
          "title": "Compras",
          "content": "Vocabulário de compras:",
          "vocabulary": [
            {"word": "Store", "translation": "Loja"},
            {"word": "Buy", "translation": "Comprar"},
            {"word": "Sell", "translation": "Vender"},
            {"word": "Price", "translation": "Preço"},
            {"word": "Cheap", "translation": "Barato"},
            {"word": "Expensive", "translation": "Caro"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 15.1: Lista de Compras",
          "description": "Faça uma lista de compras com preços:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-16": {
    "en": {
      "title": "⚽ Module 16: Hobbies & Sports",
      "objective": "Learn vocabulary for hobbies and sports activities.",
      "parts": [
        {
          "title": "Sports & Hobbies",
          "content": "Common activities:",
          "vocabulary": [
            {"word": "Play", "translation": "Jogar"},
            {"word": "Run", "translation": "Correr"},
            {"word": "Swim", "translation": "Nadar"},
            {"word": "Read", "translation": "Ler"},
            {"word": "Write", "translation": "Escrever"},
            {"word": "Dance", "translation": "Dançar"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 16.1: My Hobbies",
          "description": "Describe your favorite hobbies:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "⚽ Módulo 16: Hobbies & Esportes",
      "objective": "Aprenda vocabulário para hobbies e atividades esportivas.",
      "parts": [
        {
          "title": "Esportes & Hobbies",
          "content": "Atividades comuns:",
          "vocabulary": [
            {"word": "Play", "translation": "Jogar"},
            {"word": "Run", "translation": "Correr"},
            {"word": "Swim", "translation": "Nadar"},
            {"word": "Read", "translation": "Ler"},
            {"word": "Write", "translation": "Escrever"},
            {"word": "Dance", "translation": "Dançar"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 16.1: Meus Hobbies",
          "description": "Descreva seus hobbies favoritos:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-17": {
    "en": {
      "title": "😊 Module 17: Emotions & Feelings",
      "objective": "Learn vocabulary for expressing emotions and feelings.",
      "parts": [
        {
          "title": "Emotions",
          "content": "Common feelings:",
          "vocabulary": [
            {"word": "Happy", "translation": "Feliz"},
            {"word": "Sad", "translation": "Triste"},
            {"word": "Angry", "translation": "Bravo"},
            {"word": "Tired", "translation": "Cansado"},
            {"word": "Excited", "translation": "Animado"},
            {"word": "Worried", "translation": "Preocupado"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 17.1: How do you feel?",
          "description": "Describe how you feel today:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "😊 Módulo 17: Emoções & Sentimentos",
      "objective": "Aprenda vocabulário para expressar emoções e sentimentos.",
      "parts": [
        {
          "title": "Emoções",
          "content": "Sentimentos comuns:",
          "vocabulary": [
            {"word": "Happy", "translation": "Feliz"},
            {"word": "Sad", "translation": "Triste"},
            {"word": "Angry", "translation": "Bravo"},
            {"word": "Tired", "translation": "Cansado"},
            {"word": "Excited", "translation": "Animado"},
            {"word": "Worried", "translation": "Preocupado"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 17.1: Como você se sente?",
          "description": "Descreva como você se sente hoje:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-18": {
    "en": {
      "title": "💻 Module 18: Technology & Internet",
      "objective": "Learn vocabulary related to technology and online activities.",
      "parts": [
        {
          "title": "Technology",
          "content": "Digital devices and internet:",
          "vocabulary": [
            {"word": "Computer", "translation": "Computador"},
            {"word": "Phone", "translation": "Telefone"},
            {"word": "Internet", "translation": "Internet"},
            {"word": "Email", "translation": "Email"},
            {"word": "Website", "translation": "Website"},
            {"word": "App", "translation": "Aplicativo"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 18.1: Digital Life",
          "description": "Describe your daily technology use:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "💻 Módulo 18: Tecnologia & Internet",
      "objective": "Aprenda vocabulário relacionado à tecnologia e atividades online.",
      "parts": [
        {
          "title": "Tecnologia",
          "content": "Dispositivos digitais e internet:",
          "vocabulary": [
            {"word": "Computer", "translation": "Computador"},
            {"word": "Phone", "translation": "Telefone"},
            {"word": "Internet", "translation": "Internet"},
            {"word": "Email", "translation": "Email"},
            {"word": "Website", "translation": "Website"},
            {"word": "App", "translation": "Aplicativo"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 18.1: Vida Digital",
          "description": "Descreva seu uso diário de tecnologia:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-19": {
    "en": {
      "title": "❓ Module 19: Questions & Answers",
      "objective": "Learn how to ask and answer questions in English.",
      "parts": [
        {
          "title": "Question Words",
          "content": "Words for asking questions:",
          "vocabulary": [
            {"word": "What", "translation": "O que"},
            {"word": "Where", "translation": "Onde"},
            {"word": "When", "translation": "Quando"},
            {"word": "Why", "translation": "Por quê"},
            {"word": "How", "translation": "Como"},
            {"word": "Who", "translation": "Quem"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 19.1: Ask Questions",
          "description": "Write 5 questions you want to ask:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "❓ Módulo 19: Perguntas & Respostas",
      "objective": "Aprenda a fazer e responder perguntas em inglês.",
      "parts": [
        {
          "title": "Palavras Interrogativas",
          "content": "Palavras para fazer perguntas:",
          "vocabulary": [
            {"word": "What", "translation": "O que"},
            {"word": "Where", "translation": "Onde"},
            {"word": "When", "translation": "Quando"},
            {"word": "Why", "translation": "Por quê"},
            {"word": "How", "translation": "Como"},
            {"word": "Who", "translation": "Quem"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 19.1: Faça Perguntas",
          "description": "Escreva 5 perguntas que você quer fazer:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-20": {
    "en": {
      "title": "⏪ Module 20: Past Tense (Simple Past)",
      "objective": "Learn to talk about past actions and events.",
      "parts": [
        {
          "title": "Regular Verbs",
          "content": "Past tense of regular verbs:",
          "vocabulary": [
            {"word": "Worked", "translation": "Trabalhou"},
            {"word": "Played", "translation": "Jogou"},
            {"word": "Walked", "translation": "Caminhou"},
            {"word": "Studied", "translation": "Estudou"},
            {"word": "Watched", "translation": "Assistiu"},
            {"word": "Cooked", "translation": "Cozinhou"}
          ]
        },
        {
          "title": "Irregular Verbs",
          "content": "Common irregular verbs:",
          "vocabulary": [
            {"word": "Go - Went", "translation": "Ir - Foi"},
            {"word": "Come - Came", "translation": "Vir - Veio"},
            {"word": "See - Saw", "translation": "Ver - Viu"},
            {"word": "Have - Had", "translation": "Ter - Teve"},
            {"word": "Do - Did", "translation": "Fazer - Fez"},
            {"word": "Buy - Bought", "translation": "Comprar - Comprou"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 20.1: Past Activities",
          "description": "Write about what you did yesterday:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "⏪ Módulo 20: Passado (Simple Past)",
      "objective": "Aprenda a falar sobre ações e eventos passados.",
      "parts": [
        {
          "title": "Verbos Regulares",
          "content": "Passado de verbos regulares:",
          "vocabulary": [
            {"word": "Worked", "translation": "Trabalhou"},
            {"word": "Played", "translation": "Jogou"},
            {"word": "Walked", "translation": "Caminhou"},
            {"word": "Studied", "translation": "Estudou"},
            {"word": "Watched", "translation": "Assistiu"},
            {"word": "Cooked", "translation": "Cozinhou"}
          ]
        },
        {
          "title": "Verbos Irregulares",
          "content": "Verbos irregulares comuns:",
          "vocabulary": [
            {"word": "Go - Went", "translation": "Ir - Foi"},
            {"word": "Come - Came", "translation": "Vir - Veio"},
            {"word": "See - Saw", "translation": "Ver - Viu"},
            {"word": "Have - Had", "translation": "Ter - Teve"},
            {"word": "Do - Did", "translation": "Fazer - Fez"},
            {"word": "Buy - Bought", "translation": "Comprar - Comprou"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 20.1: Atividades Passadas",
          "description": "Escreva sobre o que você fez ontem:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-21": {
    "en": {
      "title": "⏩ Module 21: Future Tense (Will & Going to)",
      "objective": "Learn to talk about future plans and predictions.",
      "parts": [
        {
          "title": "Will for Future",
          "content": "Using 'will' for future actions:",
          "vocabulary": [
            {"word": "I will study", "translation": "Eu vou estudar"},
            {"word": "She will work", "translation": "Ela vai trabalhar"},
            {"word": "We will travel", "translation": "Nós vamos viajar"},
            {"word": "They will arrive", "translation": "Eles vão chegar"}
          ]
        },
        {
          "title": "Going to for Plans",
          "content": "Using 'going to' for planned actions:",
          "vocabulary": [
            {"word": "I'm going to study", "translation": "Eu vou estudar"},
            {"word": "She's going to buy a car", "translation": "Ela vai comprar um carro"},
            {"word": "We're going to have dinner", "translation": "Nós vamos jantar"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 21.1: Future Plans",
          "description": "Write about your plans for next week:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "⏩ Módulo 21: Futuro (Will & Going to)",
      "objective": "Aprenda a falar sobre planos futuros e previsões.",
      "parts": [
        {
          "title": "Will para Futuro",
          "content": "Usando 'will' para ações futuras:",
          "vocabulary": [
            {"word": "I will study", "translation": "Eu vou estudar"},
            {"word": "She will work", "translation": "Ela vai trabalhar"},
            {"word": "We will travel", "translation": "Nós vamos viajar"},
            {"word": "They will arrive", "translation": "Eles vão chegar"}
          ]
        },
        {
          "title": "Going to para Planos",
          "content": "Usando 'going to' para ações planejadas:",
          "vocabulary": [
            {"word": "I'm going to study", "translation": "Eu vou estudar"},
            {"word": "She's going to buy a car", "translation": "Ela vai comprar um carro"},
            {"word": "We're going to have dinner", "translation": "Nós vamos jantar"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 21.1: Planos Futuros",
          "description": "Escreva sobre seus planos para a próxima semana:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-22": {
    "en": {
      "title": "🎉 Module 22: Making Plans & Invitations",
      "objective": "Learn how to make plans and extend invitations.",
      "parts": [
        {
          "title": "Making Invitations",
          "content": "Phrases for inviting people:",
          "vocabulary": [
            {"word": "Would you like to...?", "translation": "Você gostaria de...?"},
            {"word": "Do you want to...?", "translation": "Você quer...?"},
            {"word": "Let's go to...", "translation": "Vamos para..."},
            {"word": "How about...?", "translation": "Que tal...?"}
          ]
        },
        {
          "title": "Accepting & Refusing",
          "content": "Responding to invitations:",
          "vocabulary": [
            {"word": "Yes, I'd love to", "translation": "Sim, eu adoraria"},
            {"word": "That sounds great!", "translation": "Parece ótimo!"},
            {"word": "I'm sorry, I can't", "translation": "Desculpe, não posso"},
            {"word": "Maybe another time", "translation": "Talvez outra hora"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 22.1: Plan a Meeting",
          "description": "Invite a friend to do something together:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "🎉 Módulo 22: Fazendo Planos & Convites",
      "objective": "Aprenda a fazer planos e estender convites.",
      "parts": [
        {
          "title": "Fazendo Convites",
          "content": "Frases para convidar pessoas:",
          "vocabulary": [
            {"word": "Would you like to...?", "translation": "Você gostaria de...?"},
            {"word": "Do you want to...?", "translation": "Você quer...?"},
            {"word": "Let's go to...", "translation": "Vamos para..."},
            {"word": "How about...?", "translation": "Que tal...?"}
          ]
        },
        {
          "title": "Aceitando & Recusando",
          "content": "Respondendo a convites:",
          "vocabulary": [
            {"word": "Yes, I'd love to", "translation": "Sim, eu adoraria"},
            {"word": "That sounds great!", "translation": "Parece ótimo!"},
            {"word": "I'm sorry, I can't", "translation": "Desculpe, não posso"},
            {"word": "Maybe another time", "translation": "Talvez outra hora"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 22.1: Planeje um Encontro",
          "description": "Convide um amigo para fazer algo juntos:",
          "type": "textarea"
        }
      ]
    }
  },
  "module-23": {
    "en": {
      "title": "🚨 Module 23: Emergencies & Giving Directions",
      "objective": "Learn emergency vocabulary and how to give directions.",
      "parts": [
        {
          "title": "Emergency Phrases",
          "content": "Important emergency expressions:",
          "vocabulary": [
            {"word": "Help!", "translation": "Socorro!"},
            {"word": "Call the police!", "translation": "Chame a polícia!"},
            {"word": "Call an ambulance!", "translation": "Chame uma ambulância!"},
            {"word": "I'm lost", "translation": "Estou perdido"},
            {"word": "Where's the hospital?", "translation": "Onde fica o hospital?"}
          ]
        },
        {
          "title": "Giving Directions",
          "content": "Directions vocabulary:",
          "vocabulary": [
            {"word": "Turn left", "translation": "Vire à esquerda"},
            {"word": "Turn right", "translation": "Vire à direita"},
            {"word": "Go straight", "translation": "Vá em frente"},
            {"word": "It's on the left", "translation": "Está à esquerda"},
            {"word": "It's on the right", "translation": "Está à direita"},
            {"word": "Next to", "translation": "Ao lado de"},
            {"word": "Across from", "translation": "Em frente a"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercise 23.1: Emergency Situation",
          "description": "Describe what you would do in an emergency:",
          "type": "textarea"
        }
      ]
    },
    "pt": {
      "title": "🚨 Módulo 23: Emergências & Dando Direções",
      "objective": "Aprenda vocabulário de emergência e como dar direções.",
      "parts": [
        {
          "title": "Frases de Emergência",
          "content": "Expressões importantes de emergência:",
          "vocabulary": [
            {"word": "Help!", "translation": "Socorro!"},
            {"word": "Call the police!", "translation": "Chame a polícia!"},
            {"word": "Call an ambulance!", "translation": "Chame uma ambulância!"},
            {"word": "I'm lost", "translation": "Estou perdido"},
            {"word": "Where's the hospital?", "translation": "Onde fica o hospital?"}
          ]
        },
        {
          "title": "Dando Direções",
          "content": "Vocabulário de direções:",
          "vocabulary": [
            {"word": "Turn left", "translation": "Vire à esquerda"},
            {"word": "Turn right", "translation": "Vire à direita"},
            {"word": "Go straight", "translation": "Vá em frente"},
            {"word": "It's on the left", "translation": "Está à esquerda"},
            {"word": "It's on the right", "translation": "Está à direita"},
            {"word": "Next to", "translation": "Ao lado de"},
            {"word": "Across from", "translation": "Em frente a"}
          ]
        }
      ],
      "exercises": [
        {
          "title": "Exercício 23.1: Situação de Emergência",
          "description": "Descreva o que você faria em uma emergência:",
          "type": "textarea"
        }
      ]
    }
  }
});

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
