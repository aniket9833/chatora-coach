'use client';

import { useState } from 'react';
import {
  Award,
  CheckCircle,
  Heart,
  BookOpen,
  Zap,
  X,
  ZoomIn,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const certificates = [
  {
    id: 1,
    title: 'MHB Certified Nutrition Coach',
    issuer: 'My Health Buddy Academy',
    year: '2023',
    icon: Award,
    accentColor: '#ea580c',
    badgeBg: 'from-orange-50 to-amber-50',
    badgeBorder: 'border-orange-200',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',

    imageSrc: '/certificates/cert1.jpg',
    description:
      'Certified Nutrition Coach specializing in sports nutrition and lifestyle management.',
  },
  {
    id: 2,
    title: 'Postpartum Recovery Specialist',
    issuer: 'My Health Buddy Academy',
    year: '2025',
    icon: Heart,
    accentColor: '#e11d48',
    badgeBg: 'from-rose-50 to-pink-50',
    badgeBorder: 'border-rose-200',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100',
    imageSrc: '/certificates/cert2.jpg',
    description:
      "Specialized certification in postpartum recovery, nutrition, and women's health coaching.",
  },
  {
    id: 3,
    title: 'Certified Fitness Coach',
    issuer: 'My Health Buddy Academy',
    year: '2025',
    icon: Zap,
    accentColor: '#2563eb',
    badgeBg: 'from-blue-50 to-cyan-50',
    badgeBorder: 'border-blue-200',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    imageSrc: '/certificates/cert3.jpg',
    description: 'Anatomy of Movement.',
  },
  {
    id: 4,
    title: 'Strong Nation Certified Fitness Coach',
    issuer: 'Strong Nation',
    year: '2025',
    icon: BookOpen,
    accentColor: '#059669',
    badgeBg: 'from-emerald-50 to-green-50',
    badgeBorder: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    imageSrc: '/certificates/cert4.jpg',
    description:
      'Weights instructor and Weight Management with practical application.',
  },
];

type Certificate = (typeof certificates)[0];

function CertificatePlaceholder({ cert }: { cert: Certificate }) {
  const Icon = cert.icon;
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${cert.badgeBg} flex flex-col items-center justify-center gap-4 p-6`}
    >
      <div
        className="relative w-full max-w-sm mx-auto rounded-2xl border-4 p-6 flex flex-col items-center gap-4"
        style={{ borderColor: cert.accentColor + '40' }}
      >
        {/* Corner ornaments */}
        {(
          [
            'top-2 left-2',
            'top-2 right-2',
            'bottom-2 left-2',
            'bottom-2 right-2',
          ] as const
        ).map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-4 h-4 rounded-sm`}
            style={{ background: cert.accentColor + '60' }}
          />
        ))}

        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: cert.accentColor + '20' }}
        >
          <Icon className="w-8 h-8" style={{ color: cert.accentColor }} />
        </div>

        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
            Certificate of Achievement
          </p>
          <h3 className="text-base font-bold text-gray-800 mb-1">
            {cert.title}
          </h3>
          <p className="text-xs text-gray-500">{cert.issuer}</p>
          <div
            className="mt-3 inline-block px-3 py-0.5 rounded-full text-xs font-semibold"
            style={{
              background: cert.accentColor + '20',
              color: cert.accentColor,
            }}
          >
            Issued {cert.year}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <Shield className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400">Verified Credential</span>
        </div>

        <p className="text-[10px] text-center text-gray-300 italic">
          Set <code className="font-mono">imageSrc</code> to display your
          certificate
        </p>
      </div>
    </div>
  );
}

function LightboxModal({
  cert,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  cert: Certificate;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const Icon = cert.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Image Area */}
        <div className="lg:w-3/5 relative bg-gray-50 min-h-72 lg:min-h-[500px]">
          {cert.imageSrc ? (
            <img
              src={cert.imageSrc}
              alt={cert.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <CertificatePlaceholder cert={cert} />
          )}

          {/* Nav arrows */}
          {hasPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>

        {/* Info Panel */}
        <div className="lg:w-2/5 p-8 flex flex-col justify-between">
          <div>
            {/* Close */}
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div
              className={`w-14 h-14 rounded-2xl ${cert.iconBg} flex items-center justify-center mb-5`}
            >
              <Icon className={`w-7 h-7 ${cert.iconColor}`} />
            </div>

            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                background: cert.accentColor + '15',
                color: cert.accentColor,
              }}
            >
              <Shield className="w-3 h-3" />
              Verified Certificate · {cert.year}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {cert.title}
            </h2>
            <p className="text-sm font-semibold text-gray-500 mb-4">
              {cert.issuer}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {cert.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Issued by accredited institution
            </div>
            {cert.imageSrc && (
              <a
                href={cert.imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: cert.accentColor }}
              >
                <ExternalLink className="w-4 h-4" />
                Open full size
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CertificatesGallery() {
  const [activeCertId, setActiveCertId] = useState<number | null>(null);

  const activeCertIndex = certificates.findIndex((c) => c.id === activeCertId);
  const activeCert =
    activeCertIndex >= 0 ? certificates[activeCertIndex] : null;

  const openCert = (id: number) => setActiveCertId(id);
  const closeCert = () => setActiveCertId(null);
  const prevCert = () => {
    if (activeCertIndex > 0)
      setActiveCertId(certificates[activeCertIndex - 1].id);
  };
  const nextCert = () => {
    if (activeCertIndex < certificates.length - 1)
      setActiveCertId(certificates[activeCertIndex + 1].id);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      {/* Lightbox */}
      {activeCert && (
        <LightboxModal
          cert={activeCert}
          onClose={closeCert}
          onPrev={prevCert}
          onNext={nextCert}
          hasPrev={activeCertIndex > 0}
          hasNext={activeCertIndex < certificates.length - 1}
        />
      )}

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 gap-2">
              <Shield className="w-3 h-3" />
              CREDENTIALS
            </Badge>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-primary">
              Certified Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team holds multiple certifications from globally recognized
              institutions. Click any certificate to view the full credential.
            </p>
          </div>

          {/* Certificate Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              return (
                <button
                  key={cert.id}
                  onClick={() => openCert(cert.id)}
                  className={`group relative text-left bg-gradient-to-br ${cert.badgeBg} border ${cert.badgeBorder} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                >
                  {/* Thumbnail */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    {cert.imageSrc ? (
                      <img
                        src={cert.imageSrc}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                        <div
                          className="w-full h-full absolute inset-0"
                          style={{
                            background: `radial-gradient(ellipse at 50% 0%, ${cert.accentColor}18, transparent 70%)`,
                          }}
                        />
                        <div
                          className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                          style={{ background: cert.accentColor + '20' }}
                        >
                          <Icon
                            className="w-8 h-8"
                            style={{ color: cert.accentColor }}
                          />
                        </div>
                        <div className="relative text-center">
                          <p
                            className="text-xs font-bold tracking-widest uppercase"
                            style={{ color: cert.accentColor }}
                          >
                            Certificate
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {cert.year}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white rounded-full p-2.5 shadow-lg">
                        <ZoomIn className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-gray-900 leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-tight">
                      {cert.issuer}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="text-xs text-emerald-600 font-medium">
                        Verified
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Click any certificate card to view full details
          </p>
        </div>
      </div>
    </section>
  );
}
