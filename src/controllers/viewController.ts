import { Request, Response } from 'express';
import { URL } from 'url';
import fetch from 'node-fetch';

export const getView = (req: Request, res: Response) => {
  const { id } = req.params;

  return res.send(`GET VIEW!! ${id}`);
};

export const getSearch = async (req: Request, res: Response) => {
  const { playerID } = req.query;
  let player;
  let chats;

  const params = {
    playerID,
    player: undefined,
    chats: undefined,
  };

  if (playerID) {
    //find player in db
    const user_url = new URL(
      `http://DemoALB-1573559176.ap-northeast-2.elb.amazonaws.com:8000/user/info/${playerID}`
      // `http://localhost:8000/user/info/${playerID}`
    );
    player = await (await fetch(user_url, { method: 'GET' })).json();
    params.player = player;
    //find player's chat in db
    const chat_url = new URL(
      `http://DemoALB-1573559176.ap-northeast-2.elb.amazonaws.com:8001/chat/search/${playerID}`
      // `http://localhost:8001/chat/search/${playerID}`
    );
    chats = JSON.parse(await (await fetch(chat_url, { method: 'GET' })).json());
    params.chats = chats;
  }

  return res.render('search', params);
};
