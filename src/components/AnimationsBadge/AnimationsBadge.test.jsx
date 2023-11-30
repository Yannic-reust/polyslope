import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import AnimationsBadge from './AnimationsBadge';

describe("AnimationsBadge test", () => {

    test("Button is visible", () => {
        render(<AnimationsBadge />)
        // expect(screen.)
        // expect(screen.isVisi)
        const primaryButton = screen.getByRole('blah')
    })

    test("Should toggle global state", () => {

    })
})