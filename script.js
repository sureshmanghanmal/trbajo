// --- DATOS GLOBALES ---

// MAPEO DE CARACTERÍSTICAS A ICONOS Y ETIQUETAS
const featureLabels = {
    bar: { icon: 'fa-cocktail', label: 'Bar Completo' },
    sonido: { icon: 'fa-music', label: 'Sonido Premium' },
    wifi: { icon: 'fa-wifi', label: 'Wi-Fi' },
    privacidad: { icon: 'fa-user-secret', label: 'Ventanas de Privacidad' },
    pista: { icon: 'fa-compact-disc', label: 'Pista de Baile' },
    gps: { icon: 'fa-map-marked-alt', label: 'Navegación GPS' }
};

const typeLabels = {
    clasica: { title: 'Limusinas Clásicas', icon: 'fa-car', description: 'Elegancia atemporal y lujo para bodas y eventos formales.' },
    suv: { title: ' SUV y Party Bus', icon: 'fa-truck-pickup', description: 'Espacio, diversión y capacidad para grupos grandes. Perfectas para fiestas.' },
    sedan: { title: 'Sedanes y Coches Ejecutivos', icon: 'fa-gem', description: 'Discreción, confort de primera clase y chofer profesional para VIPs y negocios.' },
    deportivo: { title: 'Deportivos', icon: 'fa-tachometer-alt', description: 'Máxima velocidad y estilo. Disponible para alquiler sin chófer (según modelo).' }
};

// RANGOS DE CAPACIDAD (mejorado para filtrado por rangos)
const capacityRanges = {
    '1-2': { min: 1, max: 2, label: '2 ' },
    '1-4': { min: 1, max: 4, label: '4 ' },
    '5-8': { min: 5, max: 8, label: '8 ' },
    '9-12': { min: 9, max: 12, label: '12 ' },
    '16+': { min: 16, max: Infinity, label: '+16 ' }
};

// BASE DE DATOS DE LIMUSINAS Y COCHES DE LUJO
const fleetData = [
    // --- LIMUSINAS CLÁSICAS ---
    { id: 1, name: "Lincoln Town Limusine (Clásica)", type: "clasica", capacity: 10 , features: ["bar", "sonido"], hasDriver: true, basePricePerHour: 180, img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/1a/26/10/lincoln-town-car-limousine.jpg" },
    { id: 6, name: "Ford Excursion Plata 12 pax (Clásica)", type: "clasica", capacity: 14, features: ["bar", "sonido", "wifi"], hasDriver: true, basePricePerHour: 350, img: "https://www.martinespectaculos.com/files/servicios/9760/2548746/853/1720891394071_202cc149-f62b-4ef0-b9f8-b1b4855eb858.jpeg" },
    { id: 9, name: "Rolls-Royce Phantom Limo", type: "clasica", capacity: 14, features: ["bar", "sonido", "privacidad"], hasDriver: true, basePricePerHour: 220, img: "https://spots.ag/2024/04/28/rolls-royce-phantom-limousine-mansory-conquistador-c323128042024195153_1.jpg?1714326730" },

    // --- SUV ---
    { id: 2, name: "Hummer H2 (SUV Gigante)", type: "suv", capacity: 8, features: ["bar", "sonido", "wifi"], hasDriver: true, basePricePerHour: 190, img: "https://image-proxy.kws.kaavan.es/i/auto-auto/webs/393/images/rMepvdMa-OBdbmLq1Xy-(edit).jpg?format=webp" },
    { id: 3, name: "Cadillac Escalade (SUV Ejecutiva)", type: "suv", capacity: 8, features: ["sonido", "wifi"], hasDriver: true, basePricePerHour: 120, img: "https://www.cadillac.com/content/dam/cadillac/na/us/english/index/vehicles/future-and-concept/future-vehicles/escalade-mcm/colorizer/vehicle/25-escalade-1sg-gxp-l-v2.jpg?imwidth=1200" },
    { id: 10, name: "Party Bus (Mega Fiesta)", type: "suv", capacity: +16, features: ["bar", "sonido", "wifi", "pista"], hasDriver: true, basePricePerHour: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfzlZ2HPV-do7GcxFGaAAZqUnhJYtB8exIw&s" },
    
    // --- COCHES DE LUJO ---
    { id: 4, name: "Mercedes Clase S (Sedán Lujo)", type: "sedan", capacity: 4, features: ["wifi"], hasDriver: true, basePricePerHour: 180, img: "https://grupoditram.com/wp-content/uploads/2023/07/sprin-1-1024x546.jpg" },
    { id: 8, name: "BMW Serie 7 (Sedán Ejecutivo)", type: "sedan", capacity: 4, features: ["wifi", "sonido"], hasDriver: true, basePricePerHour: 160, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 12, name: "Bentley Continental GT", type: "sedan", capacity: 4, features: ["wifi", "privacidad", "sonido"], hasDriver: true, basePricePerHour: 190, img: "https://fotos.quecochemecompro.com/bentley-continental-gt/bentley-continental-gt-azul-carretera-1.jpg?size=750x400" },

    // --- COCHES DEPORTIVOS ---
    { id: 11, name: "Ferrari F8 Tributo (Deportivo)", type: "deportivo", capacity: 2, features: ["sonido", "gps"], hasDriver: false, basePricePerHour: 450, img: "https://cdn.ferrari.com/cms/network/media/img/resize/5d26fdb7c3f9ec0af6475619-01_fb_ppl_intro_lp3lhwq8?width=1080" },
    { id: 13, name: "Lamborghini Huracán", type: "deportivo", capacity: 2, features: ["sonido", "gps"], hasDriver: false, basePricePerHour: 550, img: "https://upload.wikimedia.org/wikipedia/commons/3/34/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%2C_Lamborghini_Huracan_2015_%D0%B2%D0%BE%D0%B7%D0%BB%D0%B5_Grand_Hotel_Palace_%282%29.jpg" },
];

// --- LÓGICA DE INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    // Página principal (index.html)
    if (document.getElementById('search-form')) {
        initializeSearchPage();
    }

    // Página de Flota (flota.html)
    if (document.getElementById('flota-clasificada-container')) {
        renderClassifiedFleet();
    }

    // Smooth scroll para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hostname === location.hostname && this.pathname === location.pathname) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// --- FUNCIÓN DE RENDERIZADO DE FLOTA CLASIFICADA (flota.html) ---

function renderClassifiedFleet() {
    const container = document.getElementById('flota-clasificada-container');
    container.innerHTML = '';

    // Agrupar vehículos por tipo
    const classifiedFleet = fleetData.reduce((acc, limo) => {
        const type = limo.type;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(limo);
        return acc;
    }, {});

    // Ordenar por tipo
    const typeOrder = ['clasica', 'suv', 'sedan', 'deportivo'];

    typeOrder.forEach(typeKey => {
        const vehicles = classifiedFleet[typeKey];
        if (!vehicles || vehicles.length === 0) return;

        const typeInfo = typeLabels[typeKey];
        if (!typeInfo) return;

        // Encabezado de categoría
        const typeHeader = document.createElement('div');
        typeHeader.classList.add('fleet-type-header');
        typeHeader.style.padding = '50px 0 20px';
        typeHeader.style.maxWidth = '1000px';
        typeHeader.style.margin = '0 auto';

        typeHeader.innerHTML = `
            <h2 style="margin-bottom: 5px; color: var(--secondary);">
                <i class="fas ${typeInfo.icon}" style="color: var(--primary);"></i> ${typeInfo.title}
            </h2>
            <p class="section-subtitle" style="margin-bottom: 30px; margin-top: 10px;">
                ${typeInfo.description}
            </p>
        `;
        container.appendChild(typeHeader);
        
        // Grid de vehículos
        const grid = document.createElement('div');
        grid.classList.add('fleet-grid-custom');
        grid.style.maxWidth = '1000px';
        grid.style.margin = '0 auto 60px';
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        grid.style.gap = '30px';

        vehicles.forEach(limo => {
            const card = document.createElement('div');
            card.classList.add('limo-card');
            card.style.gridTemplateColumns = '1fr';

            const featuresSummary = limo.features.map(f => featureLabels[f].label).join(', ') || 'Sin extras';
            const driverStatus = limo.hasDriver ? 
                '<span style="color: green; font-weight: 600;"><i class="fas fa-user-tie"></i> Chófer Incluido</span>' : 
                '<span style="color: orange; font-weight: 600;"><i class="fas fa-key"></i> Solo Alquiler</span>';

            card.innerHTML = `
                <img src="${limo.img}" alt="${limo.name}" onerror="this.src='https://via.placeholder.com/400x300?text=${limo.name.split(' ')[0]}'" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px 10px 0 0;">
                <div class="limo-details" style="padding: 20px; text-align: left;">
                    <h3 style="font-size: 1.3em; color: var(--secondary); margin-bottom: 10px;">${limo.name}</h3>
                    <div class="limo-info" style="display: flex; flex-direction: column; gap: 8px;">
                        <span><i class="fas fa-users"></i> Capacidad: ${limo.capacity} personas</span>
                        <span><i class="fas fa-money-bill-alt"></i> Precio Base: $${limo.basePricePerHour}/hora</span>
                        ${driverStatus}
                        <hr style="border: 0; border-top: 1px dashed #ddd; margin: 5px 0;">
                        <span style="font-size: 0.9em; color: #666;"><i class="fas fa-star"></i> Extras: ${featuresSummary}</span>
                    </div>
                    <a href="index.html#buscar" class="cta-button" style="width: 100%; margin-top: 20px; text-align: center; padding: 10px; display: block; text-decoration: none;">
                         <i class="fas fa-search"></i> Ver Precio y Reservar
                    </a>
                </div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
    });

    if (container.children.length === 0) {
        container.innerHTML = `
            <div class="initial-message">
                <i class="fas fa-car-crash"></i><br>
                Error al cargar la flota. Vuelve a intentarlo más tarde.
            </div>
        `;
    }
}

// --- LÓGICA DE LA PÁGINA DE BÚSQUEDA (index.html) ---

function initializeSearchPage() {
    const form = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
    const durationInput = document.getElementById('duracion');
    const tipoServicioSelect = document.getElementById('tipo-servicio');

    // Mostrar mensaje inicial
    showInitialMessage();

    // Maneja el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        filterAndDisplayResults();
    });
    
    // Filtros en tiempo real con debounce
    let durationTimer;
    durationInput.addEventListener('input', () => {
        clearTimeout(durationTimer);
        durationTimer = setTimeout(filterAndDisplayResults, 500);
    });
    
    tipoServicioSelect.addEventListener('change', filterAndDisplayResults);
    
    // Event listeners para todos los checkboxes
    document.querySelectorAll('.filters-grid input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterAndDisplayResults);
    });

    // FUNCIÓN PRINCIPAL DE FILTRADO Y VISUALIZACIÓN (MEJORADA)
    function filterAndDisplayResults() {
        const duration = parseInt(durationInput.value) || 1;
        const selectedServiceType = tipoServicioSelect.value;
        
        // Obtener rangos de capacidad seleccionados
        const selectedCapacityRanges = Array.from(
            document.querySelectorAll('input[name="capacidad"]:checked')
        ).map(cb => cb.value);
        
        // Obtener tipos de vehículo seleccionados
        const selectedTypes = Array.from(
            document.querySelectorAll('input[name="tipo"]:checked')
        ).map(cb => cb.value);
        
        // Obtener comodidades seleccionadas
        const selectedComodidades = Array.from(
            document.querySelectorAll('input[name="comodidad"]:checked')
        ).map(cb => cb.value);

        // DEBUG: Mostrar en consola lo que se está filtrando
        console.log('Filtros aplicados:', {
            duration,
            selectedServiceType,
            selectedCapacityRanges,
            selectedTypes,
            selectedComodidades
        });

        // FILTRADO MEJORADO
        const filteredLimos = fleetData.filter(limo => {
            // 1. Filtro por Tipo de Servicio
            if (selectedServiceType === 'con-chofer' && !limo.hasDriver) {
                console.log(`${limo.name} - Rechazado: Requiere chófer y no lo tiene`);
                return false;
            }
            if (selectedServiceType === 'sin-chofer' && limo.hasDriver) {
                console.log(`${limo.name} - Rechazado: Solo sin chófer y tiene chófer`);
                return false;
            }

            // 2. Filtro por Capacidad (usando rangos)
            if (selectedCapacityRanges.length > 0) {
                const matchesCapacity = selectedCapacityRanges.some(rangeKey => {
                    const range = capacityRanges[rangeKey];
                    if (!range) {
                        console.warn(`Rango no encontrado: ${rangeKey}`);
                        return false;
                    }
                    const matches = limo.capacity >= range.min && limo.capacity <= range.max;
                    console.log(`${limo.name} (${limo.capacity} pax) vs Rango ${rangeKey} (${range.min}-${range.max}): ${matches}`);
                    return matches;
                });
                
                if (!matchesCapacity) {
                    console.log(`${limo.name} - Rechazado: No cumple rango de capacidad`);
                    return false;
                }
            }

            // 3. Filtro por Tipo de Vehículo (OR)
            if (selectedTypes.length > 0 && !selectedTypes.includes(limo.type)) {
                console.log(`${limo.name} - Rechazado: Tipo ${limo.type} no está en ${selectedTypes.join(', ')}`);
                return false;
            }
            
            // 4. Filtro por Comodidades (AND: debe tener TODAS las seleccionadas)
            if (selectedComodidades.length > 0) {
                const hasAllFeatures = selectedComodidades.every(
                    feature => limo.features.includes(feature)
                );
                if (!hasAllFeatures) {
                    console.log(`${limo.name} - Rechazado: No tiene todas las comodidades (tiene: ${limo.features.join(', ')}, requiere: ${selectedComodidades.join(', ')})`);
                    return false;
                }
            }

            console.log(`${limo.name} - ✓ APROBADO`);
            return true;
        });

        console.log(`Total vehículos filtrados: ${filteredLimos.length} de ${fleetData.length}`);
        displayResults(filteredLimos, duration, selectedServiceType);
    }

    // FUNCIÓN PARA MOSTRAR MENSAJE INICIAL
    function showInitialMessage() {
        resultsContainer.innerHTML = `
            <div class="initial-message" style="text-align: center; padding: 60px 20px; color: #666;">
                <i class="fas fa-search" style="font-size: 3em; color: var(--primary); margin-bottom: 20px;"></i>
                <h3 style="color: var(--secondary); margin-bottom: 10px;">Encuentra tu vehículo ideal</h3>
                <p>Usa los filtros para buscar entre nuestra flota de vehículos de lujo</p>
                <small style="color: #999;">Selecciona capacidad, tipo de servicio y comodidades</small>
            </div>
        `;
    }

    // FUNCIÓN PARA MOSTRAR LOS RESULTADOS (MEJORADA)
    function displayResults(filteredLimos, duration, serviceType) {
        resultsContainer.innerHTML = '';
        
        if (filteredLimos.length === 0) {
            resultsContainer.innerHTML = `
                <div class="initial-message" style="text-align: center; padding: 60px 20px;">
                    <i class="fas fa-search" style="font-size: 3em; color: #ccc; margin-bottom: 20px;"></i>
                    <h3 style="color: var(--secondary);">No se encontraron vehículos</h3>
                    <p style="color: #666; margin-bottom: 20px;">
                        No hay vehículos que coincidan con los filtros seleccionados.
                    </p>
                    <button onclick="document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false); document.getElementById('tipo-servicio').value = 'todos'; initializeSearchPage();" 
                            class="cta-button" style="background: var(--secondary);">
                        <i class="fas fa-redo"></i> Limpiar Filtros
                    </button>
                </div>
            `;
            return;
        }

        // Ordenar por precio (menor a mayor)
        filteredLimos.sort((a, b) => a.basePricePerHour - b.basePricePerHour);

        // Mostrar contador de resultados
        const resultsHeader = document.createElement('div');
        resultsHeader.style.cssText = 'text-align: center; margin-bottom: 30px; padding: 15px; background: #f8f9fa; border-radius: 10px;';
        resultsHeader.innerHTML = `
            <p style="margin: 0; color: var(--secondary); font-weight: 600;">
                <i class="fas fa-check-circle" style="color: var(--primary);"></i> 
                Se encontraron ${filteredLimos.length} vehículo${filteredLimos.length !== 1 ? 's' : ''} disponible${filteredLimos.length !== 1 ? 's' : ''}
            </p>
        `;
        resultsContainer.appendChild(resultsHeader);

        // Crear tarjetas
        filteredLimos.forEach(limo => {
            const limoCard = createLimoCard(limo, duration, serviceType);
            resultsContainer.appendChild(limoCard);
        });

        // Animación de entrada
        const cards = resultsContainer.querySelectorAll('.limo-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // FUNCIÓN PARA CREAR UNA TARJETA DE LIMUSINA (MEJORADA)
    function createLimoCard(limo, duration, serviceType) {
        const totalPrice = (limo.basePricePerHour * duration).toFixed(2);
        const driverStatus = limo.hasDriver ? 
            '<i class="fas fa-user-tie"></i> Incluye Chófer' : 
            '<i class="fas fa-key"></i> Solo Alquiler';
        const priceLabel = serviceType === 'con-chofer' ? 'Precio Total Estimado' : 'Costo de Alquiler';

        const featuresHTML = limo.features.map(feature => {
            const featureInfo = featureLabels[feature];
            return `<span><i class="fas ${featureInfo.icon}"></i> ${featureInfo.label}</span>`;
        }).join('');

        const limoCard = document.createElement('div');
        limoCard.classList.add('limo-card');
        
        limoCard.innerHTML = `
            <img src="${limo.img}" alt="${limo.name}" onerror="this.src='https://via.placeholder.com/180x120?text=Limusina'" loading="lazy">
            
            <div class="limo-details">
                <h3>${limo.name}</h3>
                <p class="limo-description">
                    Vehículo ${typeLabels[limo.type].title.toLowerCase().replace('limusinas ', '').replace('sedanes y coches ejecutivos', 'ejecutivo').replace('deportivos y exóticos', 'deportivo')} 
                    con capacidad para ${limo.capacity} persona${limo.capacity !== 1 ? 's' : ''}.
                </p>
                <div class="limo-info">
                    <span><i class="fas fa-users"></i> Capacidad: ${limo.capacity} personas</span>
                    <span><i class="fas fa-money-bill-alt"></i> Precio Base: $${limo.basePricePerHour}/hora</span>
                    <span style="color: ${limo.hasDriver ? 'green' : 'orange'}; font-weight: 600;">${driverStatus}</span>
                    ${featuresHTML ? `<hr style="width: 100%; border: 0; border-top: 1px solid #eee; margin: 5px 0;">${featuresHTML}` : ''}
                </div>
            </div>
            
            <div class="limo-reservation">
                <p class="limo-price">$${totalPrice}</p>
                <p>${priceLabel}<br><small>(${duration} hora${duration !== 1 ? 's' : ''})</small></p>
                <button class="cta-button" onclick="alert('Función de reserva en desarrollo. Precio: $${totalPrice}')">
                    <i class="fas fa-calendar-check"></i> Reservar Ahora
                </button>
            </div>
        `;
        return limoCard;
    }

    // Ejecutar filtrado inicial
    filterAndDisplayResults();
}