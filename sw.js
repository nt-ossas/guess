self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                ".", 
                "./style.css",
                "./img/logo.png",
                "./img/17.jpg",
                "./img/after_hours.jpg",
                "./img/american_dream.jpg",
                "./img/astroworld.jpg",
                "./img/bad_vibes_forever.jpg",
                "./img/birds_in_the_trap_sing_mcknight.jpg",
                "./img/come_over_when_your_sober_-_pt1.jpg",
                "./img/come_over_when_your_sober_-_pt2.jpg",
                "./img/damn..jpg",
                "./img/days_before_rodeo.jpg",
                "./img/Death_Race_for_Love.jpg",
                "./img/did_you_known_there's....jpg",
                "./img/DIE_LIT.jpg",
                "./img/dio_lo_sa.jpg",
                "./img/Dolce_Vita.jpg",
                "./img/dystopia.jpg",
                "./img/emanuele_-_marchio_registrato.jpg",
                "./img/emanuele.jpg",
                "./img/famoso.jpg",
                "./img/for_all_the_dogs.jpg",
                "./img/GOOD_KID,_M.A.A.D_CITY.jpg",
                "./img/goodbye_&_good_riddance.jpg",
                "./img/hardstone_psyco.jpg",
                "./img/her_loss.jpg",
                "./img/heroes_&_villains.jpg",
                "./img/i_am___i_was.jpg",
                "./img/i_nomi_del_diavolo.jpg",
                "./img/icon.jpg",
                "./img/il_coraggio_dei_bambini_atto_II.jpg",
                "./img/il_coraggio_dei_bambini.jpg",
                "./img/jackboys.jpg",
                "./img/le_cose_cambiano.jpg",
                "./img/legens_never_die.jpg",
                "./img/love_sick.jpg",
                "./img/quarto_di_bue.jpg",
                "./img/rockstar.jpg",
                "./img/rodeo.jpg",
                "./img/Routine.jpg",
                "./img/savage_mode_II.jpg",
                "./img/savage_mode.jpg",
                "./img/Scialla_Sempre.jpg",
                "./img/Scialla_Sempre_-_Deluxe.jpg",
                "./img/scorpion.jpg",
                "./img/so_much_fun.jpg",
                "./img/so_much_fun_-_deluxe.jpg",
                "./img/Solo_Tutto.jpg",
                "./img/starboy.jpg",
                "./img/the_globe.jpg",
                "./img/TO_PIMP_A_BUTTERFLY.jpg",
                "./img/tunnel.jpg",
                "./img/ultraviolence_-_deluxe.jpg",
                "./img/untouchable.jpg",
                "./img/utopia.jpg",
                "./img/vera_baddie.jpg",
                "./img/we_don't_trust_you.jpg",
                "./img/we_still_don't_trust_you.jpg",
                "./img/x2vr.jpg",
                "./img/xxx.jpg",
                "./js/script.js",
            ]);
        }
    ))
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    )
});