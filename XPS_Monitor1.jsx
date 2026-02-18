export const command = `
  VINFO=$(sudo -n '/Library/Application Support/VoltageShift/voltageshift' info 2>/dev/null);
  if [ -z "$VINFO" ]; then echo "OFFLINE"; else
    FREQ=$(echo "$VINFO" | grep -i 'CPU Freq:' | awk '{print $3}' | tr -d ',');
    TEMP=$(echo "$VINFO" | grep -i "Temp:" | awk '{print $(NF-1)}');
    USAGE=$(ps -A -o %cpu | awk '{s+=$1} END {printf "%.0f", s}');
    MEM=$(vm_stat | perl -ne '/page size of (\\d+)/ and $size=$1; /Pages (free|speculative|inactive):\\s+(\\d+)/ and $out+=$2; END { printf "%.1f", ($out*$size)/(1024**3) }');
    # On détecte si le ventilo tourne (F0Ac)
    FAN=$(ioreg -c AppleSMC | grep -m1 "F0Ac" | awk '{print $NF}' | tr -d '<>' || echo "0");
    echo "$FREQ|$TEMP|$USAGE|$MEM|$FAN|$VINFO";
  fi
`;

export const refreshFrequency = 4000;

export const render = ({output, error}) => {
  const containerStyle = {
    position: 'absolute',
    top: '18px',
    left: '18px',
    fontFamily: 'Menlo, Monaco, monospace',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '25px',
    color: '#ffffff',
    fontSize: '13px',
    border: '1px solid #ffffff',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    minWidth: '300px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  };

  if (error || !output || output.includes("OFFLINE")) {
    return <div style={containerStyle}>⚠️ Dashboard en attente... (Reboot requis)</div>;
  }

  const [freq, temp, usage, mem, fan, vRaw] = output.split('|');
  const lines = vRaw.split('\n');
  const getVLine = (regex) => {
    const found = lines.find(line => regex.test(line));
    return found ? found.trim() : "N/A";
  };

  const pl = getVLine(/PL1:/);
  const volt = getVLine(/Voltage:/).split(',')[1]?.trim() || "N/A";
  const pwr = getVLine(/Power:/).split(',')[2]?.trim() || "N/A";

  return (
    <div style={containerStyle}>
      <div style={{fontSize: '13px', borderBottom: '1px solid #ffffff', fontWeight: 'bold', marginBottom: '12px', paddingBottom: '5px', opacity: 0.7}}>
        XPS 9700 SYSTEM DASHBOARD
      </div>

      {/* SECTION CPU */}
      <div style={{marginBottom: '15px'}}>
        <div style={{color: '#F58027', fontWeight: 'bold', marginBottom: '4px'}}>PROCESSOR</div>
        <div>Freq: <span style={{color: '#F58027'}}>{freq} MHz</span></div>
        <div>Usage: {Math.round(usage / 8)}% | Temp: {temp}°C</div>
        <div style={{fontSize: '11px', color: '#00FF00', marginTop: '2px'}}>
            Ventilateurs: {fan !== "0" ? "Actifs 🌀" : "Silencieux 💤"}
        </div>
      </div>

      {/* SECTION VOLTAGESHIFT */}
      <div style={{marginBottom: '15px'}}>
        <div style={{color: '#9C0707', fontWeight: 'bold', marginBottom: '4px'}}>VOLTAGESHIFT</div>
        <div style={{fontSize: '11px'}}>{pl}</div>
        <div>{volt}</div>
        <div style={{fontWeight: 'bold'}}>Net Power: {pwr}</div>
      </div>

      {/* SECTION RAM */}
      <div>
        <div style={{color: '#279FF5', fontWeight: 'bold', marginBottom: '4px'}}>MEMORY</div>
        <div>RAM Libre: <span style={{color: '#279FF5'}}>{mem} Go</span></div>
      </div>
    </div>
  );
};
