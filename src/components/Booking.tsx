import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar, Users, ChevronDown, ArrowRight, Check } from 'lucide-react';

const rooms = [
  { name: 'Garden Residence', price: 7000 },
  { name: 'Ocean Villa', price: 8500 },
  { name: 'Presidential Suite', price: 12500 },
  { name: 'Sky Penthouse', price: 15000 },
];

const months = [
  'June 2026', 'July 2026', 'August 2026', 'September 2026',
  'October 2026', 'November 2026', 'December 2026',
];

const generateCalendarDays = () => {
  const days = [];
  const today = 16; // Current day from context
  for (let i = today; i <= 30; i++) {
    days.push(i);
  }
  return days;
};

export default function Booking() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showRoomDropdown, setShowRoomDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('June 2026');
  const [calendarDays] = useState(generateCalendarDays());
  const [activeDateField, setActiveDateField] = useState<'in' | 'out'>('in');

  const handleDateSelect = (day: number) => {
    const dateStr = `${day} ${selectedMonth.split(' ')[0]}`;
    if (activeDateField === 'in') {
      setCheckIn(dateStr);
      setActiveDateField('out');
    } else {
      setCheckOut(dateStr);
      setShowCalendar(false);
    }
  };

  return (
    <section
      id="booking"
      ref={ref}
      className="relative bg-charcoal py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory leading-tight mb-6">
            Reserve Your
            <br />
            <span className="italic text-gold">Sanctuary</span>
          </h2>
          <p className="text-ivory/60 text-base max-w-xl mx-auto">
            Embark on an extraordinary experience with our seamless reservation process.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-ivory/5 backdrop-blur-sm border border-ivory/10 p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Check In */}
            <div className="relative">
              <label className="block text-gold text-xs tracking-ultra-wide-sm uppercase mb-3">
                Check In
              </label>
              <button
                onClick={() => {
                  setActiveDateField('in');
                  setShowCalendar(true);
                }}
                className="w-full flex items-center gap-3 px-5 py-4 bg-transparent border border-ivory/20 text-ivory text-sm hover:border-gold/50 transition-colors text-left"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span className={checkIn ? 'text-ivory' : 'text-ivory/40'}>
                  {checkIn || 'Select Date'}
                </span>
              </button>
            </div>

            {/* Check Out */}
            <div className="relative">
              <label className="block text-gold text-xs tracking-ultra-wide-sm uppercase mb-3">
                Check Out
              </label>
              <button
                onClick={() => {
                  setActiveDateField('out');
                  setShowCalendar(true);
                }}
                className="w-full flex items-center gap-3 px-5 py-4 bg-transparent border border-ivory/20 text-ivory text-sm hover:border-gold/50 transition-colors text-left"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span className={checkOut ? 'text-ivory' : 'text-ivory/40'}>
                  {checkOut || 'Select Date'}
                </span>
              </button>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-gold text-xs tracking-ultra-wide-sm uppercase mb-3">
                Guests
              </label>
              <button
                onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                className="w-full flex items-center justify-between px-5 py-4 bg-transparent border border-ivory/20 text-ivory text-sm hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gold" />
                  <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-gold transition-transform ${showGuestDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showGuestDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-charcoal border border-ivory/20 z-20"
                >
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-ivory/80 text-sm">Adults</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => guests > 1 && setGuests(guests - 1)}
                        className="w-8 h-8 border border-ivory/20 text-ivory hover:border-gold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-ivory">{guests}</span>
                      <button
                        onClick={() => guests < 8 && setGuests(guests + 1)}
                        className="w-8 h-8 border border-ivory/20 text-ivory hover:border-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Room Type */}
            <div className="relative">
              <label className="block text-gold text-xs tracking-ultra-wide-sm uppercase mb-3">
                Suite
              </label>
              <button
                onClick={() => setShowRoomDropdown(!showRoomDropdown)}
                className="w-full flex items-center justify-between px-5 py-4 bg-transparent border border-ivory/20 text-ivory text-sm hover:border-gold/50 transition-colors"
              >
                <span className={selectedRoom ? 'text-ivory' : 'text-ivory/40'}>
                  {selectedRoom || 'Select Suite'}
                </span>
                <ChevronDown className={`w-4 h-4 text-gold transition-transform ${showRoomDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showRoomDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-charcoal border border-ivory/20 z-20 max-h-60 overflow-y-auto"
                >
                  {rooms.map((room) => (
                    <button
                      key={room.name}
                      onClick={() => {
                        setSelectedRoom(room.name);
                        setShowRoomDropdown(false);
                      }}
                      className="w-full px-5 py-3 flex items-center justify-between text-ivory/80 hover:bg-ivory/10 hover:text-gold transition-colors text-sm"
                    >
                      <span>{room.name}</span>
                      <span className="text-gold/80">${room.price.toLocaleString()}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Calendar Popup */}
          {showCalendar && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-charcoal border border-ivory/20 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-transparent text-ivory border border-ivory/20 px-4 py-2 text-sm"
                >
                  {months.map((month) => (
                    <option key={month} value={month} className="bg-charcoal text-ivory">
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-center text-ivory/40 text-xs py-2">
                    {day}
                  </div>
                ))}
                {/* Empty cells for alignment */}
                {[...Array(1)].map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {calendarDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className="aspect-square flex items-center justify-center text-ivory hover:bg-gold hover:text-white transition-colors text-sm"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-ivory/60 text-sm">
              <p>Questions? Our reservations team is available 24/7</p>
              <p className="text-gold mt-1">+1 (555) AURUM-LUX</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-12 py-5 bg-gold text-white text-sm tracking-ultra-wide-sm uppercase transition-all duration-300 hover:bg-gold-dark flex items-center justify-center gap-3"
            >
              Check Availability
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-ivory/40 text-xs tracking-wide"
        >
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-gold" />
            Best Rate Guarantee
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-gold" />
            Flexible Cancellation
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-gold" />
            Concierge Support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
