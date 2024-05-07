import { Injectable } from '@angular/core';
import { Video } from '../tipos/video';
import { VIDEOS } from '../mocks/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  obtenerTodos(): Promise<Video[]> {
    return new Promise(resolve => resolve(VIDEOS));
  }

  obtenerPorId(id: number): Promise<Video> {
    return new Promise(resolve => resolve(VIDEOS.find(v => v.id === id)!));
  }

  alta(video: Video): Promise<Video> {
    video.id = VIDEOS.length ? Math.max(...VIDEOS.map(v => v.id)) + 1: 1;
    VIDEOS.push(video);
    return new Promise(resolve => resolve(video));
  }
}
