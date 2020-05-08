function Movie_OnStart(){SoundPlay("sonido", true);

}

function Frame__0_0(ID){Pause();

}

function Frame__1_0(ID){Pause();

}

function boton1_OnClick(){GotoSceneNameAndPlay("escena de audio", 0);
SoundPlay("boton", false);
}

function botonpausar_OnClick(){VideoPlay("video");
SoundPlay("boton", false);

}

function botonpausar_OnRelease(){VideoResume("video");
SoundPlay("boton", false);

}

function botonvolumen_OnClick(){VideoSetVolume("video", 100);
SoundPlay("boton", false);

}

function botonvolumen_OnRelease(){VideoSetVolume("video", 0);
SoundPlay("boton", false);

}

function pausamusica_OnClick(){SoundPause("sonido");
SoundPlay("boton", false);

}

function pausamusica_OnRelease(){SoundPlay("sonido", true);
SoundPlay("boton", false);

}

function boton2_OnClick(){GotoSceneNameAndPlay("escena de video", 0);
SoundPlay("boton", false);

}

