
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const clinicAddress = 'HAUPTSTR. 28, 65843 SULZBACH / TS';
  const instagramUrl = 'https://www.instagram.com/dermafirst/';
  const mapsQuery = encodeURIComponent('Hauptstr. 28, 65843 Sulzbach (Taunus), Deutschland');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const openStreetMapUrl = `https://www.openstreetmap.org/search?query=${mapsQuery}`;
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adresse',
      value: clinicAddress,
      href: googleMapsUrl
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '06196 - 999 8220',
      href: 'tel:+496196-9998220'
    },
    {
      icon: Phone,
      label: 'Mobil',
      value: '0175 - 3089 3895',
      href: 'tel:+491753089395'
    },
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@dermafirst.de',
      href: 'mailto:info@dermafirst.de'
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>dermafirst.de - Dermatologie und moderne Hautpflege in Sulzbach</title>
        <meta name="description" content="Professionelle Dermatologie und moderne Hautpflege in Sulzbach. Kontakt, Instagram und direkte Navigation zu dermafirst auf einen Blick." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Instagram Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-border/70 bg-white shadow-[0_20px_60px_-38px_rgba(11,46,64,0.28)]">
                <div className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.55),_transparent_34%),linear-gradient(135deg,_rgba(249,252,255,0.98),_rgba(255,255,255,1))]" />
                  <CardContent className="relative p-8 md:p-12">
                    <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
                      <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-base font-semibold text-foreground">
                          <Instagram className="h-4 w-4 text-primary" />
                          dermafirst auf Instagram
                        </div>
                        <h2
                          className="mt-5 text-4xl md:text-5xl font-bold text-foreground"
                          style={{ textBalance: 'balance' }}
                        >
                          Aktuelle Einblicke und Neuigkeiten direkt von der Praxis
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                          Auf Instagram zeigt dermafirst Behandlungen, Eindruecke aus der Praxis und aktuelle Informationen in einem ruhigen, nahbaren Format.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                          <Button size="lg" className="gap-2 text-lg" asChild>
                            <a href={instagramUrl} target="_blank" rel="noreferrer">
                              <Instagram className="h-5 w-5" />
                              Instagram oeffnen
                            </a>
                          </Button>
                          <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                            <a href="#contact">
                              <MapPin className="h-5 w-5" />
                              Kontaktdaten ansehen
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-6 shadow-[0_18px_45px_-30px_rgba(11,46,64,0.22)] backdrop-blur-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Instagram className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              Profil
                            </p>
                            <p className="mt-1 text-2xl font-bold text-foreground">@dermafirst</p>
                          </div>
                        </div>
                        <div className="mt-6 space-y-4 border-t border-border/70 pt-6">
                          <p className="text-lg leading-8 text-muted-foreground">
                            Schnell erreichbar, klar praesentiert und besonders angenehm auf dem Smartphone.
                          </p>
                          <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                          >
                            Profil direkt besuchen
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section id="contact" className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-center"
                style={{ textBalance: 'balance' }}
              >
                Kontakt
              </h2>
              <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-12 text-center max-w-3xl mx-auto">
                Wir sind fuer Sie da und begleiten Sie bei allen dermatologischen Anliegen mit Ruhe, Sorgfalt und Erfahrung.
              </p>

              <div className="max-w-4xl mx-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-border/70 bg-card shadow-[0_18px_60px_-40px_rgba(11,46,64,0.25)]">
                    <CardContent className="p-8 md:p-10">
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-base font-semibold text-primary">
                        <Navigation className="h-4 w-4" />
                        Tippen zum Navigieren
                      </div>
                      <h3 className="mt-5 text-3xl md:text-4xl font-bold text-card-foreground">
                        dermafirst in Sulzbach finden
                      </h3>
                      <p className="mt-5 text-xl font-medium text-card-foreground">
                        {clinicAddress}
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2 text-lg" asChild>
                          <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                            <MapPin className="h-5 w-5" />
                            In Google Maps oeffnen
                          </a>
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                          <a href={openStreetMapUrl} target="_blank" rel="noreferrer">
                            <Navigation className="h-5 w-5" />
                            OpenStreetMap
                          </a>
                        </Button>
                      </div>
                      <p className="mt-6 text-base leading-7 text-muted-foreground">
                        Auch die Adresskarte unten ist klickbar, damit mobile Besucher direkt aus dem Kontaktbereich in die Navigation wechseln koennen.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <Card className="h-full border border-border/70 bg-card shadow-none transition-colors duration-200 hover:border-primary/30">
                      <CardContent className="p-7 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              {item.label}
                            </h3>
                            <p className="text-xl font-medium text-card-foreground break-words">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="block h-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl transition-all duration-200"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} dermafirst.de. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  Datenschutz
                </a>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                >
                  Impressum
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
