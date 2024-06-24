import { useEffect } from 'react';
import useSound from 'use-sound';
import bg from './bg/haha.mp3';

export default function BackgroundMusic({ isPlaying }) {
  const [play, { stop }] = useSound(bg, { loop: true });

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  return null;
}
