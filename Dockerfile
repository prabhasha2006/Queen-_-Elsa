FROM node:latest

RUN git clone https://github.com/prabhasha2006/Queen--Elsa /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN git clone https://github.com/prabhasha2006/Queen-_-Elsa
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
