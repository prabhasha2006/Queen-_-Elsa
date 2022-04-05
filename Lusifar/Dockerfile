FROM fusuf/whatsasena:latest

RUN git clone https://github.com/prabhasha2006/Queen-_-Elsa /root/LUSIFARWABOT
WORKDIR /root/LUSIFARWABOT/
RUN git https://github.com/prabhasha2006/uploads
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]


