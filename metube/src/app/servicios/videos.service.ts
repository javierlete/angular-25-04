import { Injectable } from '@angular/core';
import { Video } from '../tipos/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  url = 'http://127.0.0.1:3000/videos/';

  async obtenerTodos(): Promise<Video[]> {
    const respuesta = await fetch(this.url);
    return await respuesta.json();
  }

  async obtenerPorId(id: number): Promise<Video> {
    const respuesta = await fetch(this.url + id);
    return await respuesta.json();
  }

  async alta(video: Video): Promise<Video> {
    const respuesta = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(video),
      headers: {
        'Content-type': 'application/json'
      }
    });

    return await respuesta.json();
  }
}
