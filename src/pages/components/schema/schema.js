import "../../../common.scss"
import "./schema.scss"

const svg = document.querySelector('#pict');

function createRectangle(x, y, width, height, fill, text, textX, textY, fontSize){
    const rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    rect.style.x = x;
    rect.style.y = y;
    rect.style.width = width;
    rect.style.height = height;
    rect.style.fill = fill;
    svg.appendChild(rect);

    createText(text, textX, textY, fontSize);

}

function createText (text, textX, textY, fontSize, fontColor){

    const rectangleText = document.createElementNS("http://www.w3.org/2000/svg", "text");

    rectangleText.setAttribute('font-size', fontSize);
    rectangleText.setAttribute('font-family', 'Arial');
    rectangleText.setAttribute("fill", fontColor);
    rectangleText.textContent = text;
    rectangleText.setAttribute("x", textX);
    rectangleText.setAttribute("y", textY);

    svg.appendChild(rectangleText);
}

createRectangle("0","0", "985","761", "#2d333b");
createRectangle("22","95", "200","40", "white", "Алликсаар","82","122","15");
createRectangle("262","393", "200","40", "white","Ольга Боргдорф","302","418","15");
createRectangle("262","575", "200","40", "white","Сергей Брус","317","601","15");
createRectangle("742","168", "200","40", "white","Анастасия Ширинкина","763","194","15");
createRectangle("742","238", "200","40", "white","Александр Троян","779","264","15");
createRectangle("742","392", "200","40", "white","Дмитрий Возигнуй","774","418","15");
createRectangle("742","453", "200","40", "white","Кристина Болтушкина","762","479","15");
createRectangle("742","515", "200","40", "white","Максим Висюлькин","770","541","15");
createRectangle("142","637", "200","40", "white","Игорь Зверек","192","663","15");
createRectangle("142","697", "200","40", "white","Антон Строй","196","724","15");

createRectangle("142","228", "200","62", "white","Cтанислав", "204", "255","15");
createText("Клитотехнис","196","276", "15");
createRectangle("262","310", "200","62", "white","Людмила", "330", "336","15");
createText("Водолазская","316","357", "15");
createRectangle("742","85", "200","62", "white","Ду Хаст", "816", "112","15");
createText("Вячеславович","790","133", "15");

createText("Масоны Самсона", "23", "46", "31", "white");




