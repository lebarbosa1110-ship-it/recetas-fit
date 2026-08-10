# Prompt para a Lovable — Landing page "160 Recetas Fit"

Cole tudo abaixo da linha na Lovable. Antes de enviar, troque [LINK_HOTMART] pelo link de checkout do seu produto na Hotmart.

Onde achar o link: painel da Hotmart → Produtos → seu produto → Divulgação → Link de divulgação. Ele tem o formato https://pay.hotmart.com/XXXXXXXXX. Use o link de pagamento (pay.hotmart.com), não o da página de produto.

---

Crie uma landing page de vendas de página única para um ebook de receitas.

## REGRAS GERAIS
- Todo o texto visível deve estar em espanhol neutro latino-americano. Use exatamente os textos que forneço abaixo. Não traduza para inglês nem português, não reescreva o copy.
- Página única, sem menu de navegação no topo. Nenhum link que leve o visitante para fora da página, exceto o botão de compra.
- Mobile-first e totalmente responsiva.
- Checkout: todos os botões de compra da página levam para o checkout da Hotmart.
- Defina uma constante única no topo do arquivo: `const HOTMART_URL = "[LINK_HOTMART]";`
- Todos os botões usam essa constante. Não repita a URL em lugar nenhum.
- Os links abrem em nova aba, com target="_blank" e rel="noopener noreferrer".
- Cada botão acrescenta um parâmetro sck diferente à URL, para eu identificar na Hotmart de qual seção veio a venda: ?sck=hero no botão do topo, ?sck=oferta no botão da seção de preço, ?sck=final no botão da faixa final e ?sck=barra-movil na barra fixa do mobile.
- Se a URL já contiver ?, o parâmetro deve ser anexado com & em vez de ?. Escreva uma pequena função auxiliar para montar o link em vez de concatenar strings direto no JSX.
- Use tags <a> de verdade nos botões (não <button> com onClick), para que funcionem com clique do meio, "abrir em nova aba" e leitores de tela.
- Não invente depoimentos, nomes, fotos de clientes nem números de vendas. A seção de opiniões deve vir com estrutura pronta e conteúdo marcado como placeholder para eu preencher depois.
- Não use nenhuma promessa de perda de peso, resultado em dias ou números de quilos.

## DESIGN
Estilo limpo, minimalista, com muito espaço em branco. Nada de gradientes chamativos, animações exageradas ou elementos de "página de vendas agressiva".

- Fundo principal branco #FFFFFF; seções alternadas em #F8FAFA
- Cor primária (teal): #0F766E; hover #0B5D56; tons de apoio #14B8A6 e #F0FDFA
- Cor do CTA (laranja, alto contraste): #EA580C; hover #C2410C
- Texto principal #1F2937; texto secundário #64748B
- Tipografia: títulos em serifada elegante (Fraunces ou Playfair Display), corpo em sans-serif (Inter). Carregue do Google Fonts.
- Cards: raio de 16px, borda de 1px #E6ECEA, sombra bem sutil
- Padding vertical das seções: 80px no desktop, 56px no mobile
- Largura máxima do conteúdo: 1120px, centralizado
- Ícones: use lucide-react, estilo outline, nunca emoji
- No mobile, barra fixa no rodapé com o botão de compra e o preço

## SEÇÃO 1 — HERO
Layout em duas colunas no desktop (texto à esquerda, imagem à direita), empilhado no mobile. Fundo branco.

- Selo acima do título: Recetario en español
- H1: 160 recetas fit para comer rico sin dejar la dieta
- Subtítulo: Recetas bajas en carbohidratos, fáciles y rápidas. Con tiempo de preparación, porciones e información nutricional en cada una.
- Três pills abaixo do subtítulo: 160 recetas · 97 páginas · Descarga inmediata
- Botão principal (laranja, grande): Quiero el recetario — $9,90
- Texto pequeno abaixo do botão: Pago único. Sin suscripciones. Garantía de 7 días.
- Coluna da direita: espaço para imagem do mockup do ebook (deixe um placeholder com proporção 4:5 e alt text "Portada del recetario 160 Recetas Fit").

## SEÇÃO 2 — EL PROBLEMA
Fundo #F8FAFA. Título centralizado, três cards abaixo.

- H2: ¿Por qué siempre terminas abandonando la dieta?
- Card 1 — ícone de prato — título "Todo sabe igual" — texto "Pollo, arroz y brócoli durante tres semanas. Nadie sostiene eso, y no es culpa de tu fuerza de voluntad."
- Card 2 — ícone de relógio — título "No tienes dos horas" — texto "Las recetas saludables suelen asumir que tienes toda la tarde libre para cocinar. La realidad es otra."
- Card 3 — ícone de lista — título "Ingredientes imposibles" — texto "Harinas raras, superalimentos caros y técnicas de chef. Si no lo consigues en tu supermercado, no lo vas a hacer."
- Frase de fechamento centralizada abaixo dos cards: El problema nunca fue tu disciplina. Fue no tener recetas que valga la pena repetir.

## SEÇÃO 3 — BENEFICIOS DE COMER BIEN
Fundo branco. Grid de 6 cards (3 colunas no desktop, 1 no mobile). Cada card tem ícone em teal, título e uma frase.

- H2: Lo que cambia cuando comes bien
- Subtítulo: No se trata de sufrir menos. Se trata de sentirte distinto todos los días.

1. Energía más estable — Sin el bajón de media tarde que llega después de una comida cargada de harinas.
2. Menos antojos de azúcar — Cuando el cuerpo recibe grasa y proteína suficientes, el antojo constante baja solo.
3. Mejor digestión — Comidas más simples, menos ultraprocesados y menos pesadez después de comer.
4. Sueño más profundo — Lo que cenas afecta directamente cómo duermes y cómo amaneces al día siguiente.
5. Más concentración — Menos picos de glucosa significa menos altibajos de atención durante el día.
6. Menos hinchazón — Reducir harinas refinadas y azúcar suele notarse en el abdomen antes que en la balanza.

Nota pequena ao final da seção, em cinza: Los beneficios varían de una persona a otra. Este material es informativo y no sustituye la orientación de un profesional de la salud.

## SEÇÃO 4 — QUÉ INCLUYE
Fundo #F8FAFA. Grid de 8 cards pequenos (4 colunas no desktop, 2 no mobile). Cada card mostra o número em destaque na cor teal, o nome da categoria e uma linha de descrição.

- H2: 160 recetas organizadas en 8 categorías

- 25 — Desayunos — Muchos listos en menos de 10 minutos
- 40 — Almuerzos y cenas — Con proteína completa y saciante
- 20 — Snacks — Para ese momento entre comidas
- 20 — Opciones vegetarianas — Sin carne y sin depender de harinas
- 10 — Sopas — Fáciles de preparar en cantidad
- 10 — Ensaladas — Que funcionan como comida principal
- 20 — Postres — Sin azúcar ni harinas refinadas
- 15 — Bebidas y batidos — Para reemplazar los refrescos

## SEÇÃO 5 — VISTA PREVIA
Fundo branco. Três imagens lado a lado no desktop, carrossel simples no mobile.

- H2: Mira por dentro antes de comprar
- Subtítulo: Estas son páginas reales del recetario.
- Deixe três placeholders de imagem com proporção A4 (vertical), com legendas: Índice completo, Página de recetas, Apertura de capítulo. Alt texts descritivos em espanhol.

## SEÇÃO 6 — ANATOMÍA DE UNA RECETA
Fundo #F8FAFA. Layout em duas colunas: à esquerda, uma reprodução em HTML de um card de receita; à direita, uma lista de 5 itens explicando os elementos.

- H2: Así es cada una de las 160 recetas

Card de exemplo (reproduza este layout com HTML/CSS, não com imagem):
- Número em círculo teal: 1
- Título: Huevos revueltos cremosos con aguacate
- Pills: 8 min · 1 porción
- Coluna esquerda "INGREDIENTES": 3 huevos, 1 cucharada de mantequilla, 2 cucharadas de crema de leche, ½ aguacate en cubos, Sal y pimienta al gusto
- Coluna direita "PREPARACIÓN": quatro passos curtos numerados
- Faixa nutricional cinza com quatro métricas: 480 kcal (Calorías), 21 g (Proteína), 42 g (Grasa), 3 g (C netos)
- Box de tip com borda esquerda em teal: El secreto de los huevos cremosos es el fuego bajo y retirarlos antes de que se vean listos.

Lista à direita:
1. Tiempo real de preparación — Sin sorpresas: lo que dice es lo que tarda.
2. Rendimiento en porciones — Para que sepas exactamente cuánto rinde.
3. Ingredientes con medidas claras — Nada de "un poco de" ni "al ojo".
4. Información nutricional estimada — Calorías, proteína, grasa y carbohidratos netos.
5. Un consejo práctico — El detalle que separa un plato correcto de uno que da ganas de repetir.

## SEÇÃO 7 — PARA QUIÉN ES
Fundo branco. Duas colunas: à esquerda, lista com ícones de check em verde; à direita, lista com ícones de X em cinza.

- H2: ¿Es para ti?

Coluna izquierda — título "Sí, si..."
- Quieres comer mejor sin pasar horas en la cocina
- Ya intentaste otras dietas y las abandonaste por aburrimiento
- Buscas ideas concretas, no teoría sobre nutrición
- Cocinas para ti o para tu familia y necesitas variedad
- Quieres saber los macros de lo que comes sin calcularlos tú mismo

Coluna derecha — título "No, si..."
- Buscas una dieta milagrosa con resultados en una semana
- Esperas un plan de comidas día por día con lista de compras
- Necesitas un tratamiento para una condición médica específica
- No estás dispuesto a cocinar nada, ni siquiera 10 minutos

## SEÇÃO 8 — OPINIONES
Fundo #F8FAFA. Grid de 3 cards.

- H2: Lo que dicen quienes ya lo usan

IMPORTANTE: não invente depoimentos. Crie três cards com a estrutura visual pronta (avatar circular com iniciais, nome, uma linha de contexto e o texto do depoimento em itálico com 5 estrelas acima), preenchidos com o texto literal [PENDIENTE] nos campos de nome, contexto e depoimento. Adicione um comentário no código indicando onde eu devo substituir. Se possível, deixe os depoimentos num array separado no topo do componente para eu editar facilmente.

## SEÇÃO 9 — OFERTA Y PRECIO
Fundo branco. Um card central destacado com borda teal de 2px, largura máxima de 520px.

- H2: Todo el recetario por menos de lo que cuesta un almuerzo

Dentro do card:
- Título: 160 Recetas Fit
- Preço grande: $9,90 com USD menor ao lado
- Lista com checks: 160 recetas en PDF, 97 páginas con índice, Información nutricional en cada receta, Acceso inmediato después del pago, Léelo en el celular, la tablet o la computadora, Es tuyo para siempre, sin suscripción
- Botão laranja largura total: Comprar ahora — $9,90
- Abaixo do botão, box com ícone de escudo: Garantía de 7 días. Si no es lo que esperabas, escríbenos y te devolvemos el 100% de tu dinero. Sin preguntas.

## SEÇÃO 10 — PREGUNTAS FRECUENTES
Fundo #F8FAFA. Acordeão, uma pergunta aberta por vez, largura máxima de 760px.

- H2: Preguntas frecuentes

- ¿Cómo recibo el recetario? — Inmediatamente después del pago recibes un correo con tu acceso. Descargas el PDF y es tuyo para siempre: lo guardas en tu celular o computadora y lo abres cuando quieras.
- ¿Necesito ingredientes especiales o difíciles de conseguir? — No. Todas las recetas usan ingredientes de supermercado común. Algunas incluyen harina de almendras o de coco, que hoy se consiguen en casi cualquier lado.
- No sé cocinar. ¿Me va a servir? — Sí. Ninguna receta exige técnicas avanzadas y la mayoría se resuelve en menos de 30 minutos. Cada una tiene el paso a paso y un consejo práctico.
- ¿Sirve para dieta keto? — Todas las recetas son bajas en carbohidratos y cada una indica sus carbohidratos netos, así que puedes elegir las que encajen en tu límite diario.
- ¿Hay opciones para vegetarianos? — Sí, hay un capítulo completo con 20 recetas vegetarianas, además de varias más repartidas en otras categorías.
- ¿Puedo leerlo en el celular? — Sí. Es un PDF: se abre en cualquier celular, tablet o computadora, y funciona sin conexión una vez descargado.
- ¿Y si no me gusta? — Tienes 7 días para pedir la devolución completa. Escríbenos y te devolvemos tu dinero.
- Tengo una condición de salud. ¿Puedo usarlo? — Este material es informativo y no sustituye la orientación médica. Si tienes alguna condición de salud, estás embarazada o tomas medicamentos, consulta con tu médico o nutricionista antes de cambiar tu alimentación.

## SEÇÃO 11 — CTA FINAL + FOOTER
Faixa final com fundo teal #0F766E e texto branco, centralizada.

- H2: Empieza por una receta. Después por otra.
- Texto: La mejor dieta no es la más estricta: es la que puedes sostener el mes que viene y el siguiente.
- Botão laranja: Quiero el recetario — $9,90

Footer com fundo #1F2937, texto claro e pequeno, três blocos:
- Esquerda: 160 Recetas Fit e Recetario digital en español
- Centro: links Política de reembolso, Contacto, Términos de uso (podem ser placeholders #)
- Direita: © 2026. Todos los derechos reservados.

Aviso legal em uma linha, centralizado no final do footer, em cinza claro e fonte pequena: Este material tiene fines exclusivamente informativos y educativos. No constituye asesoría médica ni nutricional y no sustituye la consulta con un profesional de la salud. Los valores nutricionales son estimaciones.

## REQUISITOS TÉCNICOS
- React com Tailwind CSS
- Componentes separados por seção, num único arquivo de página
- Textos das seções em constantes no topo do arquivo, para eu editar sem mexer no layout
- Todas as imagens com alt descritivo em espanhol
- Contraste acessível (mínimo AA) em todos os textos, especialmente o branco sobre teal e sobre laranja
- Scroll suave nos botões que apontam para a seção de oferta
- Sem bibliotecas de animação pesadas; no máximo um fade-in sutil ao entrar na viewport
