#!/usr/bin/env python3
"""
Generate a professional, high-quality, easily copyable PDF of customer reviews
for Elegant Contractors And Interiors.
"""

import os
import csv
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

# Colors
COLOR_NAVY_DARK = HexColor('#0F172A')
COLOR_NAVY_LIGHT = HexColor('#1E293B')
COLOR_GOLD = HexColor('#D97706')
COLOR_GOLD_LIGHT = HexColor('#FEF3C7')
COLOR_GOLD_DARK = HexColor('#92400E')
COLOR_SLATE_BORDER = HexColor('#E2E8F0')
COLOR_CARD_BG = HexColor('#F8FAFC')
COLOR_CARD_BIG_BG = HexColor('#F1F5F9')
COLOR_MUTED = HexColor('#64748B')
COLOR_LINE = HexColor('#CBD5E1')
COLOR_PRIMARY_BLUE = HexColor('#2563EB')
COLOR_TEAL = HexColor('#0D9488')

class NumberedCanvas(canvas.Canvas):
    """Two-pass canvas to dynamically compute and print 'Page X of Y' along with headers/footers."""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, total_pages):
        self.saveState()
        self.setFont('Helvetica', 8)
        self.setFillColor(HexColor('#64748B'))

        # Running Header (on pages after cover/first page)
        if self._pageNumber > 1:
            self.drawString(40, 805, "ELEGANT CONTRACTORS AND INTERIORS  |  Verified Customer Reviews & Testimonials Master Sheet")
            self.setStrokeColor(COLOR_LINE)
            self.setLineWidth(0.5)
            self.line(40, 798, 555, 798)

        # Running Footer (on all pages)
        self.setStrokeColor(COLOR_LINE)
        self.setLineWidth(0.5)
        self.line(40, 42, 555, 42)

        self.drawString(40, 28, "Elegant Contractors And Interiors  •  Kharar & Mohali, Punjab  •  Phone: +91 7401011740  •  www.elegantspaces.me")
        self.drawRightString(555, 28, f"Page {self._pageNumber} of {total_pages}")
        self.restoreState()


def build_pdf(csv_path: str, output_path: str):
    # Printable area: A4 is 595.27 x 841.89 pt. 40pt left/right gives 515.27 pt width.
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=50,
        bottomMargin=50
    )

    base_styles = getSampleStyleSheet()

    # Custom typography styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=base_styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=COLOR_NAVY_DARK
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=base_styles['Normal'],
        fontName='Helvetica',
        fontSize=10.5,
        leading=14,
        textColor=COLOR_MUTED
    )

    instruction_style = ParagraphStyle(
        'InstructionText',
        parent=base_styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=HexColor('#334155')
    )

    cat_heading_style = ParagraphStyle(
        'CatHeading',
        parent=base_styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=HexColor('#0F172A')
    )

    format_heading_style = ParagraphStyle(
        'FormatHeading',
        parent=base_styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=HexColor('#1E293B')
    )

    card_title_style = ParagraphStyle(
        'CardTitle',
        parent=base_styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=COLOR_NAVY_DARK
    )

    card_meta_style = ParagraphStyle(
        'CardMeta',
        parent=base_styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        textColor=HexColor('#475569')
    )

    card_quote_style = ParagraphStyle(
        'CardQuote',
        parent=base_styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.2,
        leading=13.5,
        textColor=COLOR_NAVY_DARK
    )

    toc_item_style = ParagraphStyle(
        'TOCItem',
        parent=base_styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=HexColor('#1E293B')
    )

    story = []

    # 1. Header Banner
    story.append(Paragraph("ELEGANT CONTRACTORS AND INTERIORS", title_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Master Social Proof Sheet:</b> Reviews & Testimonials Catalog Across Lengths & Locations", subtitle_style))
    story.append(Spacer(1, 8))

    # Badge Summary Bar
    badge_data = [
        [
            Paragraph("<b>48 Total Reviews</b><br/><font color='#64748B' size='7'>Ready to Copy & Use</font>", instruction_style),
            Paragraph("<b>6 Core Categories</b><br/><font color='#64748B' size='7'>Civil, Turnkey & Woodwork</font>", instruction_style),
            Paragraph("<b>3 Format Lengths</b><br/><font color='#64748B' size='7'>1-Line, 2-Line & Detailed</font>", instruction_style),
            Paragraph("<b>Tricity Localities</b><br/><font color='#64748B' size='7'>Kharar, Mohali, New Chd</font>", instruction_style),
        ]
    ]
    badge_table = Table(badge_data, colWidths=[128, 128, 128, 128])
    badge_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), HexColor('#F1F5F9')),
        ('BOX', (0,0), (-1,-1), 0.5, HexColor('#CBD5E1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, HexColor('#CBD5E1')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(badge_table)
    story.append(Spacer(1, 8))

    # Instructions Callout Box
    instruction_box = Table(
        [[
            Paragraph(
                "<b>📋 HOW TO COPY & USE:</b> All text in this PDF is 100% selectable. Click and drag your cursor over any review text and press <b>Cmd+C</b> (Mac) or <b>Ctrl+C</b> (Windows). Paste directly into Google Business Profile updates, WhatsApp client chats, website testimonial sliders, Instagram captions, or print brochures.",
                instruction_style
            )
        ]],
        colWidths=[515]
    )
    instruction_box.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), HexColor('#FEF3C7')),
        ('BOX', (0,0), (-1,-1), 0.8, HexColor('#F59E0B')),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(instruction_box)
    story.append(Spacer(1, 14))

    # Read CSV
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = list(csv.DictReader(f))

    # Desired Category order
    category_order = [
        "Turnkey Luxury Residential Interiors",
        "Custom Engineered Modular Kitchens",
        "Civil Works & Structural Alterations",
        "Designer Wardrobes & Custom Millwork",
        "False Ceilings & Mood Lighting",
        "Commercial SCO & Office Interiors"
    ]

    # Category Color themes for left accent bar
    category_colors = {
        "Turnkey Luxury Residential Interiors": HexColor('#D97706'),      # Amber
        "Custom Engineered Modular Kitchens": HexColor('#0D9488'),        # Teal
        "Civil Works & Structural Alterations": HexColor('#DC2626'),      # Red / Crimson
        "Designer Wardrobes & Custom Millwork": HexColor('#7C3AED'),      # Purple / Violet
        "False Ceilings & Mood Lighting": HexColor('#2563EB'),            # Royal Blue
        "Commercial SCO & Office Interiors": HexColor('#059669')          # Emerald Green
    }

    # Group reviews
    grouped = {}
    for row in reader:
        cat = row['Category']
        fmt = row['Format / Length']
        if cat not in grouped:
            grouped[cat] = {'1-Liner': [], '2-Liner': [], 'Big / In-Depth': []}
        grouped[cat][fmt].append(row)

    # Render each category
    for cat_idx, cat_name in enumerate(category_order, 1):
        if cat_name not in grouped:
            continue

        cat_color = category_colors.get(cat_name, HexColor('#D97706'))

        # Category Header Banner
        cat_banner = Table(
            [[
                Paragraph(f"<font color='white'><b>CATEGORY {cat_idx} &bull; {cat_name.upper()}</b></font>", cat_heading_style)
            ]],
            colWidths=[515]
        )
        cat_banner.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), cat_color),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 10),
            ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ]))

        # Start category block
        cat_elements = [cat_banner, Spacer(1, 8)]

        format_subsections = [
            ("1-Liner", "⚡ FORMAT A: One-Line Reviews (Quick Badges, Headlines & Google Snippets)"),
            ("2-Liner", "💬 FORMAT B: Two-Line Reviews (Website Testimonial Cards & Social Sliders)"),
            ("Big / In-Depth", "📖 FORMAT C: Big In-Depth Reviews (Detailed Case Studies & NRI Endorsements)")
        ]

        for fmt_key, fmt_title in format_subsections:
            reviews_list = grouped[cat_name].get(fmt_key, [])
            if not reviews_list:
                continue

            sub_header = Paragraph(f"<b>{fmt_title}</b>", format_heading_style)
            cat_elements.append(Spacer(1, 4))
            cat_elements.append(sub_header)
            cat_elements.append(Spacer(1, 4))

            for rev in reviews_list:
                rev_id = rev['ID']
                tag = rev['Review Headline / Tag']
                stars = "<font color='#D97706'>★★★★★</font>"
                client = rev['Client Name']
                prof = rev['Profession / Profile']
                loc = rev['Locality / Society']
                city = rev['City']
                text = rev['Review Text']

                is_big = (fmt_key == "Big / In-Depth")
                card_bg = COLOR_CARD_BIG_BG if is_big else COLOR_CARD_BG

                card_content = [
                    Paragraph(f"<b>[{rev_id}] {tag}</b> &nbsp;&bull;&nbsp; {stars}", card_title_style),
                    Spacer(1, 1.5),
                    Paragraph(f"<b>Client:</b> {client} ({prof}) &nbsp;&bull;&nbsp; <b>Location:</b> {loc}, {city}", card_meta_style),
                    Spacer(1, 3.5),
                    Paragraph(f'"{text}"', card_quote_style)
                ]

                # 2-column card: left colored accent line (4pt), right text content (510pt)
                card_table = Table([['', card_content]], colWidths=[4, 511])
                card_table.setStyle(TableStyle([
                    ('BACKGROUND', (0,0), (0,0), cat_color),
                    ('BACKGROUND', (1,0), (1,0), card_bg),
                    ('BOX', (0,0), (1,0), 0.5, HexColor('#CBD5E1')),
                    ('TOPPADDING', (0,0), (1,0), 5.5),
                    ('BOTTOMPADDING', (0,0), (1,0), 5.5),
                    ('LEFTPADDING', (1,0), (1,0), 9),
                    ('RIGHTPADDING', (1,0), (1,0), 9),
                ]))

                # Keep each card together so it never cuts across pages
                cat_elements.append(KeepTogether(card_table))
                cat_elements.append(Spacer(1, 5))

        # Add all elements of this category to story
        story.extend(cat_elements)
        story.append(Spacer(1, 10))

    # Build PDF with NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated PDF: {output_path}")

if __name__ == '__main__':
    import shutil
    csv_file = '/Users/nugen/Documents/Kirat-Civil-And-Interiors/reviews-sheet.csv'
    primary_pdf = '/Users/nugen/Documents/Kirat-Civil-And-Interiors/Elegant_Contractors_And_Interiors_Reviews_Sheet.pdf'
    legacy_pdf = '/Users/nugen/Documents/Kirat-Civil-And-Interiors/Kirat_Civil_And_Interiors_Reviews_Sheet.pdf'
    
    build_pdf(csv_file, primary_pdf)
    shutil.copyfile(primary_pdf, legacy_pdf)
    
    os.makedirs('/Users/nugen/Documents/Kirat-Civil-And-Interiors/public', exist_ok=True)
    shutil.copyfile(primary_pdf, '/Users/nugen/Documents/Kirat-Civil-And-Interiors/public/Elegant_Contractors_And_Interiors_Reviews_Sheet.pdf')
    shutil.copyfile(primary_pdf, '/Users/nugen/Documents/Kirat-Civil-And-Interiors/public/Kirat_Civil_And_Interiors_Reviews_Sheet.pdf')
    print("All PDF versions generated and synchronized.")
