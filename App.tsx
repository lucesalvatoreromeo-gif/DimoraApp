
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  MapPin, 
  Wifi, 
  Phone, 
  MessageCircle, 
  Settings, 
  Save, 
  Check,
  Info,
  Navigation,
  Key,
  ClipboardList,
  Utensils,
  Camera,
  Bus,
  ExternalLink,
  ChevronDown,
  Lock,
  Umbrella,
  CircleArrowDown,
  CircleArrowUp,
  Clock,
  Pill,
  Siren,
  Plane,
  TrainFront,
  Copy,
  Car,
  Square,
  CheckSquare,
  ShoppingCart,
  Briefcase,
  Star,
  Calendar,
  Trash2,
  CircleParking,
  Youtube,
  Play
} from 'lucide-react';
import { GuideData, Language, TRANSLATIONS } from './types';
import { INITIAL_GUIDE_DATA } from './constants';

const FLAGS: Record<language, string=""> = {
  [Language.IT]: "https://flagcdn.com/w80/it.png",
  [Language.EN]: "https://flagcdn.com/w80/gb.png",
  [Language.DE]: "https://flagcdn.com/w80/de.png",
  [Language.FR]: "https://flagcdn.com/w80/fr.png",
  [Language.ES]: "https://flagcdn.com/w80/es.png"
};

const getIcon = (name: string) => {
  switch (name) {
    case 'key': return <key classname="w-5 h-5"/>;
    case 'clipboard-list': return <clipboardlist classname="w-5 h-5"/>;
    case 'utensils': return <utensils classname="w-5 h-5"/>;
    case 'camera': return <camera classname="w-5 h-5"/>;
    case 'bus': return <bus classname="w-5 h-5"/>;
    case 'taxi': return <car classname="w-5 h-5"/>;
    case 'beach': return <umbrella classname="w-5 h-5"/>;
    case 'pharmacy': return <pill classname="w-5 h-5"/>;
    case 'siren': return <siren classname="w-5 h-5"/>;
    case 'wifi': return <wifi classname="w-5 h-5"/>;
    case 'shopping-cart': return <shoppingcart classname="w-5 h-5"/>;
    case 'briefcase': return <briefcase classname="w-5 h-5"/>;
    case 'calendar': return <calendar classname="w-5 h-5"/>;
    case 'trash': return <trash2 classname="w-5 h-5"/>;
    case 'parking': return <circleparking classname="w-5 h-5"/>;
    case 'video': return <youtube classname="w-5 h-5"/>;
    default: return <info classname="w-5 h-5"/>;
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<language>(Language.IT);
  const [isAdmin, setIsAdmin] = useState(false);
  const [data, setData] = useState<guidedata>(() => {
    const saved = localStorage.getItem('dimora_sorriso_data_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with INITIAL_GUIDE_DATA to ensure new fields are present
      return { ...INITIAL_GUIDE_DATA, ...parsed, hostImage: parsed.hostImage || INITIAL_GUIDE_DATA.hostImage, hostName: parsed.hostName || INITIAL_GUIDE_DATA.hostName };
    }
    return INITIAL_GUIDE_DATA;
  });
  const [expandedSections, setExpandedSections] = useState<set<string>>(new Set());
  const [wifiCopied, setWifiCopied] = useState<{name: boolean, pass: boolean}>({ name: false, pass: false });
  const [addressCopied, setAddressCopied] = useState(false);
  const [checklistState, setChecklistState] = useState<record<string, boolean="">>({
    keys: false,
    lights: false,
    trash: false,
    windows: false
  });

  // Password Modal State
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    localStorage.setItem('dimora_sorriso_data_v2', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (isAdmin) {
      setExpandedSections(new Set(data.sections.map(s => s.id)));
    }
  }, [isAdmin, data.sections]);

  const toggleSection = (id: string) => {
    if (isAdmin) return;
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCopy = (text: string, field: 'name' | 'pass') => {
    navigator.clipboard.writeText(text);
    setWifiCopied(prev => ({ ...prev, [field]: true }));
    setTimeout(() => setWifiCopied(prev => ({ ...prev, [field]: false })), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(data.address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const toggleChecklistItem = (item: string) => {
    setChecklistState(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const updateSection = (id: string, field: 'title' | 'description', value: string) => {
    setData(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === id ? { ...s, [field]: { ...s[field], [lang]: value } } : s
      )
    }));
  };

  const handleAdminClick = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowPasswordModal(true);
      setPasswordInput('');
      setPasswordError(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '20072007') {
      setIsAdmin(true);
      setShowPasswordModal(false);
    } else {
      setPasswordError(true);
    }
  };

  const t = TRANSLATIONS[lang];
  const cleanPhone = (phone: string) => phone.replace(/\D/g, '');

  const renderDescription = (text: string) => {
    // Regex matches URLs OR Phone numbers starting with +39
    const regex = /((?:https?:\/\/[^\s]+)|(?:\+39(?:[0-9 ]){8,}))/g;
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (!part) return null;

      if (part.match(/^https?:\/\//)) {
        return (
          <a key="{i}" href="{part}" target="_blank" rel="noopener noreferrer" classname="text-amber-700 hover:text-amber-800 underline underline-offset-4 decoration-amber-500/30 font-bold inline-flex items-center gap-1 transition-colors">
            {part}
            <externallink classname="w-3 h-3"/>
          </a>
        );
      }
      
      // Phone match
      if (part.trim().match(/^\+39/)) {
         return (
          <a key="{i}" href="{`tel:${part.replace(/\s+/g," '')}`}="" classname="text-amber-700 hover:text-amber-800 font-bold inline-flex items-center gap-1 transition-colors hover:underline decoration-amber-500/30">
            {part}
          </a>
         );
      }

      return part;
    });
  };

  const renderSectionContent = (section: any) => {
    // Special rendering for Check-in section
    if (section.id === 'checkin' && !isAdmin) {
      const [checkinText, checkoutText] = section.description[lang].split('|||').map((s: string) => s.trim());
      const checklistKeys = ['keys', 'lights', 'trash', 'windows'];
      
      return (
        <div classname="px-6 pb-8 pt-2 space-y-6">
          {/* Time Boxes */}
          <div classname="grid grid-cols-2 gap-4">
            <div classname="bg-emerald-950/5 border border-emerald-900/10 p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center relative overflow-hidden">
               <div classname="absolute top-0 left-0 w-full h-1 bg-emerald-500/50"></div>
               <div classname="flex items-center gap-1 mb-2">
                 <circlearrowdown classname="w-3 h-3 text-emerald-700"/>
                 <span classname="text-emerald-800 text-[10px] font-black uppercase tracking-[0.2em]">{t.arrival}</span>
               </div>
               <div classname="text-3xl font-black text-emerald-600 tracking-tight">15:00</div>
            </div>
            <div classname="bg-rose-950/5 border border-rose-900/10 p-5 rounded-[1.5rem] flex flex-col items-center justify-center text-center relative overflow-hidden">
               <div classname="absolute top-0 left-0 w-full h-1 bg-rose-500/50"></div>
               <div classname="flex items-center gap-1 mb-2">
                 <circlearrowup classname="w-3 h-3 text-rose-700"/>
                 <span classname="text-rose-800 text-[10px] font-black uppercase tracking-[0.2em]">{t.departure}</span>
               </div>
               <div classname="text-3xl font-black text-rose-600 tracking-tight">10:00</div>
            </div>
          </div>

          {/* Instructions */}
          <div classname="space-y-4">
            <div classname="p-6 bg-emerald-50/50 border border-emerald-100/50 rounded-[1.5rem]">
              <h4 classname="flex items-center gap-2 text-emerald-800 font-bold mb-3">
                 <circlearrowdown classname="w-4 h-4"/>
                 <span classname="text-xs uppercase tracking-widest">{t.checkinInstructions}</span>
              </h4>
              <p classname="text-stone-600 text-sm leading-relaxed font-medium">
                {checkinText || section.description[lang]}
              </p>
            </div>
            
            {checkoutText && (
              <div classname="p-6 bg-rose-50/50 border border-rose-100/50 rounded-[1.5rem]">
                <h4 classname="flex items-center gap-2 text-rose-800 font-bold mb-3">
                   <circlearrowup classname="w-4 h-4"/>
                   <span classname="text-xs uppercase tracking-widest">{t.checkoutInstructions}</span>
                </h4>
                <p classname="text-stone-600 text-sm leading-relaxed font-medium mb-6">
                  {checkoutText}
                </p>

                {/* Interactive Checklist */}
                <div classname="bg-white/60 rounded-xl p-4 border border-rose-100/50">
                  <h5 classname="flex items-center gap-2 text-rose-900/70 text-[10px] uppercase font-black tracking-widest mb-3">
                    <clipboardlist classname="w-3 h-3"/>
                    {t.checkoutChecklist}
                  </h5>
                  <div classname="space-y-2">
                    {checklistKeys.map((key) => (
                      <button key="{key}" onclick="{()" ==""> toggleChecklistItem(key)}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors text-left group"
                      >
                        <div classname="{`w-5" h-5="" rounded="" border-2="" flex="" items-center="" justify-center="" transition-all="" ${="" checkliststate[key]="" ?="" 'bg-rose-500="" border-rose-500'="" :="" 'border-rose-200="" bg-white="" group-hover:border-rose-300'="" }`}="">
                          {checklistState[key] && <check classname="w-3 h-3 text-white"/>}
                        </div>
                        <span classname="{`text-sm" font-medium="" transition-colors="" ${checkliststate[key]="" ?="" 'text-stone-400="" line-through'="" :="" 'text-stone-700'}`}="">
                          {t.checklist[key as keyof typeof t.checklist]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Special rendering for Wifi
    if (section.id === 'wifi' && !isAdmin) {
      return (
        <div classname="px-6 pb-8 pt-2">
           <div classname="bg-white rounded-[1.8rem] p-6 border border-stone-200 shadow-sm relative overflow-hidden group">
              {/* Amber decoration */}
              <div classname="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <div classname="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h4 classname="text-xl font-bold mb-1 text-stone-900">{section.title[lang]}</h4>
                  <p classname="text-stone-500 text-xs font-medium">Tocca per copiare</p>
                </div>
                <div classname="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center border border-amber-200/50">
                   <wifi classname="w-6 h-6 text-amber-700"/>
                </div>
              </div>

              <div classname="space-y-3 relative z-10">
                 {/* Network */}
                 <button classname="w-full bg-stone-50 border border-stone-100 rounded-2xl p-4 flex items-center justify-between group/item hover:bg-amber-50/50 hover:border-amber-100 transition-all active:scale-[0.98] text-left" onclick="{()" ==""> handleCopy(data.wifi.name, 'name')}
                 >
                    <div>
                       <div classname="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-1">Nome Rete</div>
                       <div classname="font-mono text-base sm:text-lg font-bold tracking-tight text-stone-800">{data.wifi.name}</div>
                    </div>
                    <div classname="{`p-2.5" rounded-xl="" transition-all="" duration-300="" border="" ${wificopied.name="" ?="" 'bg-emerald-100="" border-emerald-200="" text-emerald-600="" scale-110'="" :="" 'bg-white="" border-stone-200="" text-stone-400="" group-hover="" item:border-amber-200="" group-hover="" item:text-amber-600'}`}="">
                       {wifiCopied.name ? <check classname="w-5 h-5"/> : <copy classname="w-5 h-5"/>}
                    </div>
                 </button>

                 {/* Password */}
                 <button classname="w-full bg-stone-50 border border-stone-100 rounded-2xl p-4 flex items-center justify-between group/item hover:bg-amber-50/50 hover:border-amber-100 transition-all active:scale-[0.98] text-left" onclick="{()" ==""> handleCopy(data.wifi.password, 'pass')}
                 >
                    <div>
                       <div classname="text-[10px] text-stone-400 font-black uppercase tracking-wider mb-1">Password</div>
                       <div classname="font-mono text-base sm:text-lg font-bold tracking-tight text-stone-800">{data.wifi.password}</div>
                    </div>
                    <div classname="{`p-2.5" rounded-xl="" transition-all="" duration-300="" border="" ${wificopied.pass="" ?="" 'bg-emerald-100="" border-emerald-200="" text-emerald-600="" scale-110'="" :="" 'bg-white="" border-stone-200="" text-stone-400="" group-hover="" item:border-amber-200="" group-hover="" item:text-amber-600'}`}="">
                       {wifiCopied.pass ? <check classname="w-5 h-5"/> : <copy classname="w-5 h-5"/>}
                    </div>
                 </button>
              </div>
           </div>
        </div>
      );
    }

    // Special rendering for House Rules
    if (section.id === 'rules' && !isAdmin) {
      const rulesList = section.description[lang].split('\n').filter((r: string) => r.trim());
      return (
        <div classname="px-6 pb-8 pt-4 space-y-5">
          {rulesList.map((rule: string, index: number) => {
            const cleanRule = rule.replace(/^\d+\.\s*/, '');
            // Split title and content by first colon
            const titleIndex = cleanRule.indexOf(':');
            const title = titleIndex > -1 ? cleanRule.substring(0, titleIndex) : null;
            const content = titleIndex > -1 ? cleanRule.substring(titleIndex + 1).trim() : cleanRule;

            return (
              <div key="{index}" classname="flex gap-4 items-start group">
                <div classname="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100 group-hover:border-amber-200 transition-colors shadow-sm mt-1">
                  <span classname="text-stone-900 group-hover:text-amber-900 font-black text-lg font-serif">{index + 1}</span>
                </div>
                <div classname="flex-1 bg-stone-50/50 p-4 rounded-2xl border border-stone-100/50 hover:bg-stone-50 transition-colors">
                    {title && <h5 classname="font-black text-stone-800 text-xs uppercase tracking-widest mb-1">{title}</h5>}
                    <p classname="text-stone-600 text-sm leading-relaxed font-medium">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Special rendering for Parking
    if (section.id === 'parking' && !isAdmin) {
      const parts = section.description[lang].split('|||').map((s: string) => s.trim());
      const name = parts[0] || "Saba Parking";
      const phone = parts[1] || "";
      const bookingUrl = parts[2] || "";
      const mapsUrl = parts[3] || "";

      return (
        <div classname="px-6 pb-8 pt-2">
           <div classname="bg-white rounded-[1.8rem] border border-stone-200 p-6 shadow-sm relative overflow-hidden">
              <div classname="flex items-center gap-4 mb-6">
                 <div classname="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <circleparking classname="w-6 h-6"/>
                 </div>
                 <div>
                    <h4 classname="font-black text-xl text-stone-900">{name}</h4>
                    <p classname="text-xs font-bold text-stone-400 uppercase tracking-widest">Parcheggio Custodito</p>
                 </div>
              </div>

              <div classname="grid gap-3">
                 {/* Navigate */}
                 <a href="{mapsUrl}" target="_blank" rel="noopener noreferrer" classname="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-amber-200 hover:bg-amber-50 transition-all group">
                    <div classname="flex items-center gap-3">
                       <mappin classname="w-5 h-5 text-stone-400 group-hover:text-amber-600"/>
                       <span classname="font-bold text-stone-700">Naviga / Navigate</span>
                    </div>
                    <externallink classname="w-4 h-4 text-stone-300"/>
                 </a>

                 {/* Call */}
                 {phone && (
                   <a href="{`tel:${phone}`}" classname="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                      <div classname="flex items-center gap-3">
                         <phone classname="w-5 h-5 text-stone-400 group-hover:text-emerald-600"/>
                         <span classname="font-bold text-stone-700">Chiama / Call</span>
                      </div>
                      <span classname="text-xs font-mono text-stone-400">{phone}</span>
                   </a>
                 )}

                 {/* Book */}
                 {bookingUrl && (
                   <a href="{bookingUrl}" target="_blank" rel="noopener noreferrer" classname="flex items-center justify-center gap-2 p-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all mt-2">
                      <span>Prenota Online / Book Now</span>
                      <externallink classname="w-4 h-4"/>
                   </a>
                 )}
              </div>
           </div>
        </div>
      );
    }

    // Special rendering for Bus
    if (section.id === 'bus' && !isAdmin) {
      const parts = section.description[lang].split('|||');
      return (
        <div classname="px-6 pb-8 pt-2 space-y-4">
          {parts.map((part: string, idx: number) => {
            const isAirport = idx === 0;
            const lines = part.split('\n');
            const urlMatch = part.match(/https?:\/\/[^\s]+/);
            const url = urlMatch ? urlMatch[0] : '';
            const title = lines[0] || '';
            const description = lines.slice(1).filter(l => !l.includes('http')).join('\n');

            return (
              <div key="{idx}" classname="bg-stone-50 border border-stone-200 rounded-[1.8rem] overflow-hidden group hover:border-amber-200 transition-colors">
                <div classname="p-6">
                  <div classname="flex items-start gap-4 mb-4">
                    <div classname="{`p-3" rounded-xl="" ${isairport="" ?="" 'bg-sky-100="" text-sky-700'="" :="" 'bg-indigo-100="" text-indigo-700'}`}="">
                      {isAirport ? <plane classname="w-6 h-6"/> : <trainfront classname="w-6 h-6"/>}
                    </div>
                    <div>
                      <h4 classname="font-bold text-stone-900">{title}</h4>
                      <p classname="text-stone-500 text-xs mt-1 font-medium whitespace-pre-line">{description}</p>
                    </div>
                  </div>
                  
                  {url && (
                    <a href="{url}" target="_blank" rel="noopener noreferrer" classname="{`w-full" flex="" items-center="" justify-center="" gap-2="" py-3="" px-4="" rounded-xl="" text-sm="" font-bold="" transition-all="" active:scale-95="" ${="" isairport="" ?="" 'bg-sky-50="" text-sky-700="" hover:bg-sky-100'="" :="" 'bg-indigo-50="" text-indigo-700="" hover:bg-indigo-100'="" }`}="">
                      <mappin classname="w-4 h-4"/>
                      Scendi qui / Get off here
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    
    // Special rendering for Taxi
    if (section.id === 'taxi' && !isAdmin) {
      const taxiNumber = "+390805343333";
      const taxiStandLink = "https://maps.app.goo.gl/2rpWZWiQTBzvcnxv7?g_st=ac";

      return (
        <div classname="px-6 pb-8 pt-2 space-y-5">
           {/* Location Card */}
           <div classname="bg-stone-50 border border-stone-200 p-6 rounded-[1.8rem] relative overflow-hidden">
              <div classname="absolute top-0 right-0 p-4 opacity-10 text-amber-900">
                <mappin size="{100}"/>
              </div>
              <div classname="relative z-10">
                <p classname="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-3">La tua posizione / Your Location</p>
                <p classname="text-xl sm:text-2xl font-black text-stone-800 leading-tight mb-4">{data.address}</p>
                <div classname="flex gap-2">
                   <div classname="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg inline-block">
                     Dimora Sorriso
                   </div>
                </div>
              </div>
           </div>

           {/* Call Button */}
           <a href="{`tel:${taxiNumber}`}" classname="flex items-center justify-between p-6 rounded-[1.8rem] bg-yellow-400 text-yellow-950 shadow-lg shadow-yellow-400/20 active:scale-95 transition-all group border-2 border-yellow-300 hover:bg-yellow-300">
              <div classname="flex items-center gap-4">
                 <div classname="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <phone classname="w-6 h-6"/>
                 </div>
                 <div>
                    <div classname="font-black text-lg">Taxi Bari</div>
                    <div classname="text-xs font-bold opacity-80 uppercase tracking-widest">Call Now</div>
                 </div>
              </div>
              <div classname="text-2xl font-black tracking-tight">{taxiNumber}</div>
           </a>

           {/* Taxi Stand Link */}
           <a href="{taxiStandLink}" target="_blank" rel="noopener noreferrer" classname="flex items-center gap-4 p-5 rounded-[1.8rem] bg-white border border-stone-200 shadow-sm hover:border-amber-200 transition-all active:scale-95 group">
              <div classname="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 group-hover:scale-110 group-hover:bg-amber-100 group-hover:text-amber-800 transition-all">
                <navigation classname="w-5 h-5"/>
              </div>
              <div classname="flex-1">
                 <div classname="font-bold text-stone-900 text-sm">Stazionamento / Taxi Stand</div>
                 <div classname="text-xs font-medium text-stone-500">Piazza Giuseppe Garibaldi</div>
              </div>
              <externallink classname="w-4 h-4 text-stone-400 group-hover:text-amber-500"/>
           </a>
        </div>
      );
    }

    // Special rendering for Emergency
    if (section.id === 'emergency' && !isAdmin) {
      const emergencyNumbers = [
        { number: "112", label: "Carabinieri / NUE" },
        { number: "113", label: "Polizia di Stato" },
        { number: "118", label: "Ambulanza" },
        { number: "115", label: "Vigili del Fuoco" }
      ];
      
      return (
        <div classname="px-6 pb-8 pt-2">
           <div classname="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {emergencyNumbers.map((item) => (
               <a key="{item.number}" href="{`tel:${item.number}`}" classname="flex flex-col items-center justify-center p-6 rounded-[1.8rem] bg-rose-50 border border-rose-100 hover:bg-rose-100 hover:border-rose-200 transition-all active:scale-95 group text-center shadow-sm">
                 <div classname="text-4xl font-black text-rose-600 mb-2 group-hover:scale-110 transition-transform">{item.number}</div>
                 <div classname="text-[11px] font-bold text-rose-900 uppercase tracking-widest">{item.label}</div>
               </a>
             ))}
           </div>
        </div>
      );
    }

    // Special rendering for Video Guides
    if (section.id === 'video_guides' && !isAdmin) {
      const videos = section.description[lang].split('\n').filter((v: string) => v.trim());
      
      return (
        <div classname="px-6 pb-8 pt-2 space-y-5">
           {videos.length === 0 ? (
             <p classname="text-stone-500 italic text-center text-sm">Nessuna video guida disponibile.</p>
           ) : (
             videos.map((videoLine: string, index: number) => {
               // Parse format: "Title | URL"
               const parts = videoLine.split('|');
               const title = parts[0]?.trim();
               const url = parts[1]?.trim() || parts[0]?.trim();
               
               // Check if it's a YouTube link
               const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
               const gdMatch = url.match(/drive\.google\.com\/file\/d\/([^\/?]+)/);
               
               return (
                 <div key="{index}" classname="bg-white rounded-[1.8rem] border border-stone-200 shadow-sm overflow-hidden hover:border-amber-200 transition-all">
                   <div classname="p-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-3">
                     <div classname="p-2 bg-red-100 rounded-xl text-red-600">
                        <youtube classname="w-5 h-5"/>
                     </div>
                     <h4 classname="font-bold text-stone-900 text-sm">{title}</h4>
                   </div>
                   
                   {ytMatch ? (
                     <div classname="relative pt-[56.25%] bg-black">
                       <iframe src="{`https://www.youtube.com/embed/${ytMatch[1]}`}" classname="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="{title}"></iframe>
                     </div>
                   ) : gdMatch ? (
                     <div classname="relative pt-[56.25%] bg-black">
                       <iframe src="{`https://drive.google.com/file/d/${gdMatch[1]}/preview`}" classname="absolute inset-0 w-full h-full" allow="autoplay" allowfullscreen="" title="{title}"></iframe>
                     </div>
                   ) : (
                     <div classname="p-6 flex justify-center">
                        <a href="{url}" target="_blank" rel="noopener noreferrer" classname="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-stone-700 transition-colors">
                          <play classname="w-4 h-4 fill-current"/>
                          Guarda Video / Watch Video
                        </a>
                     </div>
                   )}
                 </div>
               );
             })
           )}
        </div>
      );
    }

    // Default rendering
    return (
      <div classname="px-8 pb-10 pt-2">
        {isAdmin ? (
          <textarea value="{section.description[lang]}" onchange="{(e)" ==""> updateSection(section.id, 'description', e.target.value)}
            rows={6}
            className="w-full text-stone-700 bg-stone-50 border border-stone-200 rounded-[2rem] p-6 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
          />
        ) : (
          <div className="p-7 bg-stone-50/50 rounded-[2rem] border border-stone-100/80">
            <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line font-medium italic">
              {renderDescription(section.description[lang])}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-10 max-w-2xl mx-auto bg-stone-50 text-stone-800 selection:bg-amber-100 font-sans">
      {/* Hero Section */}
      <div className="relative h-[24rem] overflow-hidden border-b border-stone-200 shadow-sm">
        <img 
          src="https://lh3.googleusercontent.com/d/1LvN-m2oAX_NDTLB9qjFCStlfskm4KWG0" 
          alt="Dimora Sorriso Bedroom" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/20 to-transparent" />
        
        <div className="absolute top-6 right-6 flex gap-2">
          {Object.values(Language).map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 transition-all ${
                lang === l 
                  ? 'border-white shadow-lg scale-110 ring-2 ring-amber-500/50' 
                  : 'border-white/60 hover:border-white hover:scale-105 opacity-90 hover:opacity-100'
              }`}
            >
              <img 
                src={FLAGS[l]} 
                alt={l} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-10 left-8 right-8">
          <div className="flex items-center gap-2 mb-3">
             <span className="px-3 py-1 bg-amber-100 text-amber-800 border border-amber-200 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Dimora di Charme</span>
          </div>
          
          <div className="mb-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1xYCniCsEfDcyYc5ySJekWiGjRuHE1hLN" 
              alt={data.propertyName} 
              className="h-16 sm:h-20 object-contain drop-shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 text-stone-600 group cursor-pointer w-fit" onClick={handleCopyAddress}>
            <MapPin className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-semibold tracking-tight group-hover:text-amber-800 transition-colors">{data.address}</span>
            <div className={`p-1 rounded-full transition-all ${addressCopied ? 'bg-emerald-100 text-emerald-600' : 'bg-stone-100 text-stone-400 group-hover:bg-amber-100 group-hover:text-amber-800'}`}>
               {addressCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            </div>
            {addressCopied && <span className="text-xs text-emerald-600 font-bold animate-in fade-in zoom-in duration-200">{t.addressCopied}</span>}
          </div>
        </div>
      </div>

      <div className="px-6 py-10 space-y-10">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-5">
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(data.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] border border-stone-200 shadow-sm transition-all hover:shadow-md hover:border-amber-200 active:scale-95 group"
          >
            <div className="p-4 bg-stone-50 rounded-2xl mb-3 transition-colors group-hover:bg-amber-50">
              <Navigation className="w-7 h-7 text-amber-800 transition-transform group-hover:scale-110" />
            </div>
            <span className="text-[10px] font-black text-stone-500 tracking-[0.2em] uppercase group-hover:text-amber-800">{t.getDirections}</span>
          </a>
          
          <a
            href={`https://wa.me/${cleanPhone(data.contacts.whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[2rem] border border-stone-200 shadow-sm transition-all hover:shadow-md hover:border-emerald-200 active:scale-95 group"
          >
            <div className="p-4 bg-emerald-50 rounded-2xl mb-3 transition-colors group-hover:bg-emerald-100">
              <MessageCircle className="w-7 h-7 text-emerald-600 transition-transform group-hover:scale-110" />
            </div>
            <span className="text-[10px] font-black text-stone-500 tracking-[0.2em] uppercase group-hover:text-emerald-700">WhatsApp</span>
          </a>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-5">
          {data.sections.map((section) => {
            const isExpanded = expandedSections.has(section.id);
            return (
              <div 
                key={section.id} 
                className={`bg-white rounded-[2.5rem] border overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-amber-200 shadow-md ring-1 ring-amber-50' : 'border-stone-200 shadow-sm hover:border-stone-300'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  disabled={isAdmin}
                  className="w-full text-left p-6 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl border transition-all ${
                      isExpanded ? 'bg-amber-800 border-amber-800 text-white' : 'bg-stone-50 border-stone-100 text-stone-500 group-hover:border-amber-200 group-hover:text-amber-800'
                    }`}>
                      {getIcon(section.icon)}
                    </div>
                    <div>
                      {isAdmin ? (
                        <input 
                          value={section.title[lang]}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                          className="text-lg font-black bg-stone-50 border-stone-200 rounded-xl px-4 py-2 w-full outline-none focus:ring-2 focus:ring-amber-500 text-stone-900"
                        />
                      ) : (
                        <h3 className={`text-xl font-bold tracking-tight transition-colors ${isExpanded ? 'text-amber-900' : 'text-stone-800'}`}>
                          {section.title[lang]}
                        </h3>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {!isAdmin && (
                      <div className={`p-2 rounded-full transition-all ${isExpanded ? 'bg-amber-50' : ''}`}>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-amber-800' : 'text-stone-400'}`} />
                      </div>
                    )}
                  </div>
                </button>
                
                {/* Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    {renderSectionContent(section)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Footer */}
        <div className="bg-white rounded-[3.5rem] p-10 border border-stone-200 shadow-xl relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:scale-110 transition-transform text-amber-900 pointer-events-none">
             <MessageCircle size={280} />
          </div>
          
          <div className="relative flex flex-col sm:flex-row items-center gap-10 mb-12 text-center sm:text-left">
            <div className="relative">
              <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-3 transition-transform group-hover:rotate-0">
                <img src={data.hostImage} alt="Host" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white shadow-sm" title="Online" />
            </div>
            <div>
              <p className="text-amber-800 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{t.yourHost}</p>
              <h4 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">{data.hostName}</h4>
              <p className="text-stone-500 text-sm mt-2 font-medium">Sempre disponibili per ogni tua esigenza.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 relative">
            <a 
              href={`tel:${data.contacts.phone}`}
              className="flex-1 bg-white hover:bg-stone-50 p-6 rounded-[1.8rem] flex items-center justify-center gap-4 transition-all border-2 border-stone-100 hover:border-amber-200 active:scale-95 group/btn shadow-sm"
            >
              <Phone className="w-5 h-5 text-amber-800 transition-colors" />
              <span className="font-black text-xs text-stone-800 uppercase tracking-widest">Chiama</span>
            </a>
            <a 
              href={`https://wa.me/${cleanPhone(data.contacts.whatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-amber-800 hover:bg-amber-900 p-6 rounded-[1.8rem] flex items-center justify-center gap-4 transition-all shadow-lg shadow-amber-900/10 active:scale-95 group/wa"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="font-black text-xs text-white uppercase tracking-widest">WhatsApp</span>
            </a>
          </div>

          {/* Quick Messages */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { label: t.msgArriving, icon: <Plane className="w-3 h-3" /> },
              { label: t.msgCheckout, icon: <Check className="w-3 h-3" /> },
              { label: t.msgHelp, icon: <Siren className="w-3 h-3" /> }
            ].map((msg, i) => (
              <a
                key={i}
                href={`https://wa.me/${cleanPhone(data.contacts.whatsapp)}?text=${encodeURIComponent(msg.label)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-50 border border-stone-200 hover:bg-amber-50 hover:border-amber-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-center transition-all active:scale-95 group"
              >
                <div className="text-stone-400 group-hover:text-amber-600 transition-colors">{msg.icon}</div>
                <span className="text-[10px] font-bold text-stone-600 leading-tight">{msg.label}</span>
              </a>
            ))}
          </div>
          
          {/* Review Link */}
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full p-4 rounded-2xl bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-between group cursor-pointer"
          >
             <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-full text-amber-500 shadow-sm">
                   <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                   <div className="text-xs font-black text-amber-900 uppercase tracking-widest">{t.leaveReview}</div>
                   <div className="text-xs text-amber-700 font-medium">{t.reviewText}</div>
                </div>
             </div>
             <ChevronDown className="-rotate-90 w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {isAdmin && (
            <div className="mt-10 pt-10 border-t border-stone-100 space-y-5">
                <div className="flex gap-5">
                  <input 
                    placeholder="Phone"
                    value={data.contacts.phone}
                    onChange={(e) => setData(prev => ({...prev, contacts: {...prev.contacts, phone: e.target.value}}))}
                    className="flex-1 bg-stone-50 text-stone-800 text-sm p-4 rounded-2xl border border-stone-200 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <input 
                    placeholder="WhatsApp"
                    value={data.contacts.whatsapp}
                    onChange={(e) => setData(prev => ({...prev, contacts: {...prev.contacts, whatsapp: e.target.value}}))}
                    className="flex-1 bg-stone-50 text-stone-800 text-sm p-4 rounded-2xl border border-stone-200 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <button 
                  onClick={() => { if(confirm('Reset to defaults?')) { setData(INITIAL_GUIDE_DATA); localStorage.removeItem('dimora_sorriso_data_v2'); window.location.reload(); } }}
                  className="w-full py-3 rounded-xl border border-red-200 text-red-600 font-bold text-xs uppercase tracking-widest hover:bg-red-50 transition-colors"
                >
                  Reset to Defaults
                </button>
             </div>
          )}
        </div>
      </div>

      {/* Admin Link (Replaced Navbar) */}
      <div className="flex flex-col items-center justify-center pb-10 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={handleAdminClick}
          className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold text-stone-400 hover:text-stone-600 uppercase tracking-widest transition-colors"
        >
          {isAdmin ? <Save className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
          {isAdmin ? 'Salva & Esci' : 'Admin'}
        </button>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl border border-stone-200 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-stone-900 mb-2">{t.adminMode}</h3>
            <p className="text-stone-500 text-sm mb-6">Enter password to edit guide.</p>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input 
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Password"
                  autoFocus
                  className={`w-full bg-stone-50 border ${passwordError ? 'border-red-300 focus:ring-red-200' : 'border-stone-200 focus:ring-amber-200'} rounded-xl px-4 py-3 outline-none focus:ring-4 transition-all`}
                />
                {passwordError && <p className="text-red-500 text-xs mt-2 font-medium ml-1">Incorrect password</p>}
              </div>
              
              <div className="flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-3 rounded-xl font-bold text-stone-500 hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-amber-800 text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-amber-900/20 hover:bg-amber-900 transition-all"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
